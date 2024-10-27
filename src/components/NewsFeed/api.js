import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = async () => {
  const response = await axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      country: 'us',
      category: 'sports',
      apiKey: API_KEY,
    },
  });
  return response.data.articles;
};