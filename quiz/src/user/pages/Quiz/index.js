import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/topicsService";
import { getListQuestion } from "../../services/questionsService";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";
import "../../styles/Quiz.scss";
import { getAllQuestion } from "../../services/questionsService";

function Quiz() {
  const params = useParams();
  const [dataTopic, setDataTopic] = useState();
  const [dataQuestion, setDataQuestion] = useState();
  const nagigate = useNavigate();
  const [countQuestionByTopicId, setCountQuestionByTopicId] = useState({});

  const [answers, setAnswers] = useState({}); // Lưu đáp án đã chọn
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopic(params.id);
      const responseQ = await getAllQuestion();
      const countQuestion = responseQ.reduce((acc, question) => {
        acc[question.topicId] = (acc[question.topicId] || 0) + 1;
        return acc;
      }, {});

      setDataTopic(response);
      setCountQuestionByTopicId(countQuestion);
    };
    fetchApi();
  }, [params.id]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuestion(params.id);

      setDataQuestion(response);

      const totalQuestions = response.length; // Số câu hỏi
      setTimeLeft(totalQuestions * 60);
    };
    fetchApi();
  }, [params.id]);

  // Đếm ngược thời gian
  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex, // Lưu câu trả lời theo ID câu hỏi
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedAnswers = Object.entries(answers).map(
      ([questionId, answer]) => ({
        questionId: parseInt(questionId),
        answer,
      })
    );

    let options = {
      userId: getCookie("id"),
      topicId: params.id,
      answers: selectedAnswers,
    };

    const response = await createAnswer(options);
    if (response) {
      nagigate(`/result/${response.id}`);
    }
  };

  return (
    <>
      <div className="quiz-container">
        <div className="form-quiz">
          <form onSubmit={handleSubmit}>
            <h2>Bài Quiz chủ đề: {dataTopic ? dataTopic.name : ""}</h2>
            {dataQuestion && dataQuestion.length > 0 ? (
              dataQuestion.map((item, index) => (
                <div
                  className="form-quiz__item"
                  id={`question-${item.id}`}
                  key={item.id}
                >
                  <p>
                    Câu {index + 1}: {item.question}
                  </p>
                  <div className="form-quiz__answers">
                    {item.answers.map((itemAns, indexAns) => {
                      const optionLabel = String.fromCharCode(65 + indexAns); // A, B, C, D...
                      return (
                        <div key={indexAns} className="form-quiz__answer">
                          <input
                            type="radio"
                            id={`answer-${item.id}-${indexAns}`}
                            name={item.id} // Gắn ID câu hỏi vào thuộc tính name
                            value={indexAns} // Gắn chỉ số câu trả lời vào value
                            onChange={() =>
                              handleAnswerSelect(item.id, indexAns)
                            }
                          />
                          <label htmlFor={`answer-${item.id}-${indexAns}`}>
                            {optionLabel}. {itemAns}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <p>Không có câu hỏi</p>
            )}
          </form>
        </div>

        <div className="quiz-sidebar">
          <div className="timer">Thời gian còn lại: {formatTime(timeLeft)}</div>
          <div className="question-nav">
            {dataQuestion && dataQuestion.length > 0 ? (
              dataQuestion.map((item, index) => (
                <button
                  key={item.id}
                  className={`question-nav-item ${
                    answers[item.id] !== undefined ? "answered" : ""
                  }`}
                  onClick={() => {
                    document
                      .getElementById(`question-${item.id}`)
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {index + 1}
                </button>
              ))
            ) : (
              <p>Đang tải câu hỏi...</p>
            )}
          </div>
          <button
            type="button"
            className="submit-btn"
            onClick={handleSubmit} // Gọi handleSubmit khi người dùng nhấn nút
          >
            Nộp bài
          </button>
        </div>
      </div>
    </>
  );
}

export default Quiz;
