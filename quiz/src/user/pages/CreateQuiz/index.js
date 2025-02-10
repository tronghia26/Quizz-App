import { useState } from "react";
import { createQuestion } from "../../../utils/request";
import "../../styles/CreateQuiz.scss";

function CreateQuestion() {
  const [topicName, setTopicName] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", answers: ["", "", "", ""], correctAnswer: 0 },
  ]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", answers: ["", "", "", ""], correctAnswer: 0 },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !topicName ||
      questions.some((q) => !q.question || q.answers.some((a) => !a))
    ) {
      setErrorMessage(
        "Vui lòng điền đầy đủ thông tin cho các câu hỏi và chủ đề."
      );
      return;
    }

    const newTopic = {
      name: topicName,
      questions: questions.map((q) => ({
        question: q.question,
        answers: q.answers,
        correctAnswer: q.correctAnswer,
      })),
    };

    try {
      const response = await createQuestion(newTopic); // Gửi chủ đề và câu hỏi lên backend
      if (response) {
        alert("Chủ đề và câu hỏi đã được tạo thành công!");
      }
    } catch (error) {
      setErrorMessage("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div className="create-topic-container">
      <h2>Tạo chủ đề mới với câu hỏi</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Chủ đề:</label>
          <input
            type="text"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            placeholder="Nhập tên chủ đề"
            required
          />
        </div>

        {questions.map((item, questionIndex) => (
          <div key={questionIndex} className="form-question-group">
            <div className="form-group">
              <label>Câu hỏi {questionIndex + 1}:</label>
              <input
                type="text"
                value={item.question}
                onChange={(e) =>
                  handleQuestionChange(questionIndex, e.target.value)
                }
                placeholder={`Nhập câu hỏi ${questionIndex + 1}`}
                required
              />
            </div>

            {item.answers.map((answer, answerIndex) => (
              <div key={answerIndex} className="form-group">
                <label>Đáp án {String.fromCharCode(65 + answerIndex)}:</label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) =>
                    handleAnswerChange(
                      questionIndex,
                      answerIndex,
                      e.target.value
                    )
                  }
                  placeholder={`Đáp án ${String.fromCharCode(
                    65 + answerIndex
                  )}`}
                  required
                />
              </div>
            ))}

            <div className="form-group">
              <label>Đáp án đúng:</label>
              <select
                value={item.correctAnswer}
                onChange={(e) =>
                  setQuestions((prev) => {
                    const updated = [...prev];
                    updated[questionIndex].correctAnswer = Number(
                      e.target.value
                    );
                    return updated;
                  })
                }
              >
                {item.answers.map((_, index) => (
                  <option key={index} value={index}>
                    {String.fromCharCode(65 + index)}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => handleRemoveQuestion(questionIndex)}
              className="remove-question-btn"
            >
              Xóa câu hỏi
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddQuestion}
          className="add-question-btn"
        >
          Thêm câu hỏi
        </button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit">Tạo chủ đề và câu hỏi</button>
      </form>
    </div>
  );
}

export default CreateQuestion;
