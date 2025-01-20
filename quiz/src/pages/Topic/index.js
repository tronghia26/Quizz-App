import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListTopic } from "../../services/topicsService";
import { getAllQuestion } from "../../services/questionsService";
import "../../styles/Topic.scss";
import { getAllAnswer } from "../../services/answersService";

function Topic() {
  const [topics, setTopics] = useState([]);
  // const [questions, setQuestions] = useState([]);
  const [countQuestionByTopicId, setCountQuestionByTopicId] = useState({});
  const [answers, setAnswers] = useState({});
  const [users, setUsers] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTopic();
      const responseQ = await getAllQuestion();
      const responseA = await getAllAnswer();

      const countQuestion = responseQ.reduce((acc, question) => {
        acc[question.topicId] = (acc[question.topicId] || 0) + 1;
        return acc;
      }, {});

      const countAnswer = responseA.reduce((acc, answer) => {
        acc[answer.topicId] = (acc[answer.topicId] || 0) + 1;
        return acc;
      }, {});

      const countUser = responseA.reduce((acc, answer) => {
        if (!acc[answer.topicId]) {
          acc[answer.topicId] = new Set(); // Tạo một Set mới cho mỗi topicId
        }
        acc[answer.topicId].add(answer.userId); // Thêm userId vào Set
        return acc;
      }, {});

      // Chuyển đổi từ Set sang số lượng userId duy nhất
      const uniqueUserCountByTopic = Object.fromEntries(
        Object.entries(countUser).map(([topicId, userSet]) => [
          topicId,
          userSet.size,
        ])
      );

      setUsers(uniqueUserCountByTopic);

      setTopics(response);
      // setQuestions(responseQ);
      setCountQuestionByTopicId(countQuestion);
      setAnswers(countAnswer);
    };
    fetchApi();
  }, []);
  console.log(topics);

  return (
    <>
      <h2>Danh sách chủ đề</h2>
      {topics.length > 0 && (
        <div className="topic__list">
          {topics.map((item) => (
            <div className="topic__list--item" key={item.id}>
              <div className="topic__list--image">
                <img src={item.image} alt="" />
              </div>
              <div className="topic__list--content">
                <div className="topic__list--title">{item.name}</div>
                <div className="topic__list--id">Mã đề: {item.id}</div>
                <Link className="topic__list--do" to={"/quiz/" + item.id}>
                  Làm bài
                </Link>
              </div>
              <div className="topic__list--para">
                <div className="topic__list--user">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                  <span>{users[item.id] || 0}</span>
                </div>
                <div className="topic__list--did">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  <span>{answers[item.id]}</span>
                </div>
                <div className="topic__list--time">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <span>
                    {countQuestionByTopicId[item.id]
                      ? countQuestionByTopicId[item.id] + "p"
                      : "0p"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* {topics.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chủ đề</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={"/quiz/" + item.id}>Làm bài</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
    </>
  );
}

export default Topic;
