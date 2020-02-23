import axios, { AxiosResponse } from "axios";

export const axiosGet: Function = async (url: string): Promise<AxiosResponse> =>
  await axios.get(url);

export const axiosChain: Function = (
  items: Array<any>,
  responsesHandler: Function
): void => {
  axios
    .all(items)
    .then(
      axios.spread((...responses): Function => responsesHandler(responses))
    );
};
