import { getCookie } from "../helpers/cookie";
import { get } from "../utils/request";

export const getAnswerByUserId = async () => {
  const userId = getCookie("id");
  console.log(userId);

  const result = await get(`answers?userId=${userId}`);
  return result;
};

export const getTopic = async (id) => {
  const result = await get(`topics/${id}`);
  return result;
};
