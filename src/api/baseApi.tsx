import axios from "axios";

export const axiosGet = async (url: string) => {
  const response = await axios.get(url);
  return response;
};

export const axiosChain = (items: Array<any>, responsesHandler: Function) =>
  axios
    .all(items)
    .then(axios.spread((...response) => responsesHandler(response)));
