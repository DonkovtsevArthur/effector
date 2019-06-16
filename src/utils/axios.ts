import axios from "axios";

interface IAXIOS {
  url: string;
  sendObj?: {};
  method: string;
}
export const fetchAsync = async ({ url, sendObj, method }: IAXIOS) => {
  let params;
  let data;
  switch (method) {
    case "GET":
      params = sendObj;
      break;
    case "POST":
      data = sendObj;
      break;
    case "PUT":
      data = sendObj;
      break;
    case "DELETE":
      data = sendObj;
      break;
    default:
      console.log(`${method} некорректный тип запроса`);
      break;
  }

  try {
    const r = await axios({ url, method, data, params });
    return r;
  } catch ({ message, res }) {
    return {
      error: message,
      message: res && res.data ? res.data.message : ""
    };
  }
};
