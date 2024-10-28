import axios from 'axios'; // Import axios for making HTTP requests

const API_KEY = process.env.REACT_APP_NEWS_API_KEY; // Retrieve the API key from environment variables

/**
 * Fetch news articles based on a keyword and an optional page size.
 * @param {string} keyword - The keyword to search for in news articles.
 * @param {number} pageSize - The number of articles to fetch (default is 5).
 * @returns {Promise<Array>} - A promise that resolves to an array of news articles.
 */
export const fetchNews = async (keyword, pageSize = 5) => {
  try {
    // Make a GET request to the News API to fetch articles
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: keyword, // Search for articles containing the specified keyword
        apiKey: API_KEY, // Include the API key for authentication
        language: 'en', // Specify the language of the articles
        pageSize: pageSize, // Limit the number of articles fetched
      },
    });

    // Return the articles from the response data
    return response.data.articles;
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error('Error fetching news:', error); // Log the error for debugging
    throw error; // Rethrow the error to be handled by the calling function
  }
};
