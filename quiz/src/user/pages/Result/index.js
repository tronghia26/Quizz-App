import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswer } from "../../services/answersService";
import { getListQuestion } from "../../services/questionsService";
import "../../styles/Result.scss";
import {
  calculateCorrectAnswers,
  calculateTotalQuestions,
} from "../../../utils/quiz";

function Result() {
  const params = useParams();
  const [dataResult, setDataResult] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [countQuestions, setCountQuestions] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      const dataAnswers = await getAnswer(params.id);
      const dataQuestion = await getListQuestion(dataAnswers.topicId);
      console.log(dataAnswers.answers);
      console.log(dataQuestion);

      let resultFinal = [];

      for (let i = 0; i < dataQuestion.length; i++) {
        resultFinal.push({
          ...dataQuestion[i],
          ...dataAnswers.answers.find(
            (item) => parseInt(item.questionId) === parseInt(dataQuestion[i].id)
          ),
        });
      }
      setDataResult(resultFinal);
    };
    fetchApi();
  }, [params.id]);

  useEffect(() => {
    const countC = calculateCorrectAnswers(dataResult);
    setCountCorrect(countC);
    const countQ = calculateTotalQuestions(dataResult);
    setCountQuestions(countQ);
  }, [dataResult]);
  console.log(dataResult);

  return (
    <>
      <h1>
        Kết quả: {countCorrect}/{countQuestions}
      </h1>
      <div className="result__list">
        {dataResult.map((item, index) => (
          <div className="result__item" key={item.id}>
            <p>
              Câu {index + 1}: {item.question}
              {item.correctAnswer === item.answer ? (
                <span className="result__tag--true">Đúng</span>
              ) : (
                <span className="result__tag--false">Sai</span>
              )}
            </p>
            {item.answers.map((itemAns, indexAns) => {
              let className = "";
              let checked = false;

              if (item.answer === indexAns) {
                checked = true;
                className = "result__item--selected";
              }

              if (item.correctAnswer === indexAns) {
                className += "result__item--result";
              }

              return (
                <div className="result__answer" key={indexAns}>
                  <input type="radio" checked={checked} disabled />
                  <label className={className}>{itemAns}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export default Result;
