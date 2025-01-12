import { useEffect, useState } from "react";
import { getAnswerByUserId } from "../../services/answersService";
import { getListTopic } from "../../services/topicsService";
import { Link } from "react-router-dom";

function Answer() {
  const [dataAnswer, setDataAnswer] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const answerByUserId = await getAnswerByUserId();
      const topics = await getListTopic();

      let result = [];

      for (let i = 0; i < answerByUserId.length; i++) {
        result.push({
          ...topics.find((item) => item.id === answerByUserId[i].topicId),
          ...answerByUserId[i],
        });
      }

      setDataAnswer(result.reverse());
    };
    fetchApi();
  }, []);

  return (
    <>
      <h2>Danh sách bài tập đã luyện tập</h2>
      {dataAnswer.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chủ đề</th>
            </tr>
          </thead>
          <tbody>
            {dataAnswer.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Link to={"/result/" + item.id}>Xem chi tiết</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Answer;
