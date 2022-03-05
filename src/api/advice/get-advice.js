import axios from "axios";
import { ADVICE_API } from "../endpoints";

const getAdvice = () => {
  return axios.get(`${ADVICE_API}/advice`);
};

export default getAdvice;
