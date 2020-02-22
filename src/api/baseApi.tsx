// import axios from "axios";
// import baseErrorHandler from "src/api/errorHandler";
// import baseResponseHandler from "src/api/responseHandler";

// interface AxiosGet {
//   url: string;
//   form?: Object;
//   page?: number;
// }

// const DEFAULT_PAGE_SIZE = 20;
// const nextPage = (page: number) => {
//   return {
//     offset: page * DEFAULT_PAGE_SIZE,
//     limit: DEFAULT_PAGE_SIZE
//   };
// };

// const createParams = (page: number, form: Object) => {
//   return Object.assign(
//     {},
//     { apikey: process.env.MARVEL_API_PUBLIC_KEY },
//     nextPage(page),
//     form
//   );
// };

// export const axiosGet = async (
//   { url, form, page }: AxiosGet,
//   responseHandler: any = baseResponseHandler,
//   errorHandler: any = baseErrorHandler
// ) => {
//   console.log("Loading");
//   const response = await axios
//     .get(url, { params: createParams(page, form) })
//     .then(responseHandler)
//     .catch(errorHandler);
//   console.log("Not loading");
//   return response;
// };
