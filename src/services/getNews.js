import axios from "axios";

const NEWS_API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL;
const NEWS_API_KEY = process.env.REACT_APP_API_KEY;

export const getNews = async ({ searchQuery = "technology" }) => {
  try {
    const path = "/everything";
    const query = `$q=${searchQuery}&apiKey=${NEWS_API_KEY}`;
    const endPointURL = `${NEWS_API_BASE_URL}${path}${query}`;

    const res = await axios.get(endPointURL);

    if (res.status === 200) {
      const additional0bj = {
        category: searchQuery,
      };

      const resData = {
        ...res.data,
        ...additional0bj,
      };
      return resData;
    }
  } catch (error) {
    console.log("Error getting Tech News: ", error);
  }
};
