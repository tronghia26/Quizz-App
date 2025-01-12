import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic } from "../../services/topicsService";
import { getListQuestion } from "../../services/questionsService";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";

function Quiz() {
  const params = useParams();
  const [dataTopic, setDataTopic] = useState();
  const [dataQuestion, setDataQuestion] = useState();
  const nagigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getTopic(params.id);

      setDataTopic(response);
    };
    fetchApi();
  }, [params.id]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListQuestion(params.id);

      setDataQuestion(response);
    };
    fetchApi();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    let selectedAnswers = [];

    for (let i = 0; i < e.target.elements.length; i++) {
      const name = e.target.elements[i].name;
      const value = e.target.elements[i].value;

      selectedAnswers.push({
        questionId: parseInt(name),
        answer: parseInt(value),
      });
    }

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
      <h2>Bài Quiz chủ đề: {dataTopic ? dataTopic.name : ""}</h2>

      <div className="form-quiz">
        <form onSubmit={handleSubmit}>
          {dataQuestion && dataQuestion.length > 0 ? (
            dataQuestion.map((item, index) => (
              <div className="form-quiz__item" key={item.id}>
                <p>
                  Câu {index + 1}: {item.question}
                </p>
                {item.answers.map((itemAns, indexAns) => (
                  <div className="form-quiz__answer" key={indexAns}>
                    <input
                      type="radio"
                      name={item.id}
                      value={indexAns}
                      id={`quiz-${item.id}-${indexAns}`}
                    />
                    <label htmlFor={`quiz-${item.id}-${indexAns}`}>
                      {itemAns}
                    </label>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>Không có câu hỏi</p>
          )}
          <button type="submit">Nộp bài</button>
        </form>
      </div>
    </>
  );
}

export default Quiz;
