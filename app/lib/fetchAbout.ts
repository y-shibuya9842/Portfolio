import axios from "axios";

const API_URL = 'https://yshibuya-portfolio.microcms.io/api/v1/about';
const API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY!;

export type About = {
  title: string;
  content: string;
};

export const fetchAbout = async (): Promise<About> => {
  const res = await axios.get(API_URL, {
    headers: { 'X-API-KEY': API_KEY },
  });
  return res.data;
}