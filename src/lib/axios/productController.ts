import axios from "axios";

export const fetchProduct = async (url: string) => {
  const response = await axios.get(url);
  return response?.data;
};
