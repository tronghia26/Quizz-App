import { get } from "../../utils/request";

export const getListQuestion = async (topicId) => {
  const result = await get(`questions?topicId=${topicId}`);
  return result;
};

export const getAllQuestion = async () => {
  const result = await get(`questions`);
  return result;
};
