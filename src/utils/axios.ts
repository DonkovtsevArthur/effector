import axios from "axios";
export const fetchAsync = async (link: string) => {
  try {
    const r = await axios(`${link}`);
    return r;
  } catch (e) {
    return e;
  }
};
