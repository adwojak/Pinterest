import axios, { AxiosResponse } from "axios";

export const axiosGet: Function = async (url: string): Promise<AxiosResponse> =>
  await axios.get(url);

export const axiosChain: Function = async (
  items: Array<any>,
  responsesHandler: Function
): Promise<void> => {
  await axios
    .all(items)
    .then(
      axios.spread((...responses): Function => responsesHandler(responses))
    );
};
