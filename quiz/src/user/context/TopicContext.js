import React, { createContext, useContext, useEffect, useState } from "react";
import { getListTopic } from "../../services/topicsService";
import { getAllQuestion } from "../../services/questionsService";
import { getAllAnswer } from "../../services/answersService";

const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [countQuestionByTopicId, setCountQuestionByTopicId] = useState({});
  const [answers, setAnswers] = useState({});
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const responseTopics = await getListTopic();
      const responseQuestions = await getAllQuestion();
      const responseAnswers = await getAllAnswer();

      // Count questions by topic
      const countQuestions = responseQuestions.reduce((acc, question) => {
        acc[question.topicId] = (acc[question.topicId] || 0) + 1;
        return acc;
      }, {});

      // Count answers by topic
      const countAnswers = responseAnswers.reduce((acc, answer) => {
        acc[answer.topicId] = (acc[answer.topicId] || 0) + 1;
        return acc;
      }, {});

      // Count unique users by topic
      const countUsers = responseAnswers.reduce((acc, answer) => {
        if (!acc[answer.topicId]) acc[answer.topicId] = new Set();
        acc[answer.topicId].add(answer.userId);
        return acc;
      }, {});

      const uniqueUserCount = Object.fromEntries(
        Object.entries(countUsers).map(([topicId, userSet]) => [
          topicId,
          userSet.size,
        ])
      );

      setTopics(responseTopics);
      setCountQuestionByTopicId(countQuestions);
      setAnswers(countAnswers);
      setUsers(uniqueUserCount);
    };

    fetchApi();
  }, []);

  return (
    <TopicContext.Provider
      value={{ topics, countQuestionByTopicId, answers, users }}
    >
      {children}
    </TopicContext.Provider>
  );
};

export const useTopicContext = () => useContext(TopicContext);
