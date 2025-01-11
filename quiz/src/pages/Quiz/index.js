import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../../services/topicsService";
import { getListQuestion } from "../../services/questionsService";

function Quiz() {
  const params = useParams();
  const [dataTopic, setDataTopic] = useState();
  const [dataQuestion, setDataQuestion] = useState();

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

  return (
    <>
      <h2>Bài Quiz chủ đề: {dataTopic ? dataTopic.name : ""}</h2>
    </>
  );
}

export default Quiz;
