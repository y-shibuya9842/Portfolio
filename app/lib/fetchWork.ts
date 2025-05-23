import axios from "axios";
import { work } from "../type/workType"; 

const API_URL = 'https://yshibuya-portfolio.microcms.io/api/v1/work';
const API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY!;

export const fetchWork = async (): Promise<work[]> => {
  const res = await axios.get(API_URL, {
    headers: { 'X-API-KEY': API_KEY },
    params: { limit: 100 }, // 最大100件まで取得可能
  });
  return res.data.contents;
}