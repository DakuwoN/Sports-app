import React, { useEffect, useState } from 'react';
import { fetchNews } from './api'; // Import the fetchNews function to retrieve news articles
import { Stack, Card, CardContent, Typography, CardMedia, Divider, Box } from '@mui/material'; // Import necessary Material-UI components

function NewsFeed() {
    // State variables to manage news data, loading status, and error messages
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // useEffect hook to fetch news articles when the component mounts
    useEffect(() => {
      const getNews = async () => {
        try {
          // Fetch articles for NFL, NBA, and NHL categories
          const nflArticles = await fetchNews('NFL', 5); // Fetch 5 NFL articles
          const nbaArticles = await fetchNews('NBA', 5); // Fetch 5 NBA articles
          const nhlArticles = await fetchNews('NHL', 5); // Fetch 5 NHL articles
          
          // Combine articles from all three categories into a single array
          const combinedArticles = [...nflArticles, ...nbaArticles, ...nhlArticles];

          // Shuffle the combined articles to vary the display order
          const shuffledArticles = combinedArticles.sort(() => Math.random() - 0.5);
          
          // Update the state with the shuffled articles and set loading to false
          setNewsData(shuffledArticles);
          setLoading(false);
        } catch (err) {
          // Handle any errors that occur during the fetch
          setError('Failed to fetch news');
          setLoading(false);
        }
      };
 
      getNews(); // Call the function to fetch news articles
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <Stack spacing={2} sx={{ flex: 2, width: { xs: '100%', md: '50%' } }}>
            <Typography variant="h5" gutterBottom>Latest Sports News</Typography>
            {loading ? (
                <Typography>Loading news...</Typography> // Display loading message while fetching
            ) : error ? (
                <Typography color="error">{error}</Typography> // Display error message if fetching fails
            ) : (
                // Filter out articles without images and map over the valid articles to create cards
                newsData
                    .filter(news => news.urlToImage) // Only include articles with a valid image URL
                    .map((news, index) => (
                        <Card key={index} sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3, backgroundColor: '#f5f5f5', overflow: 'visible' }}>
                            <CardContent sx={{ padding: '16px', overflowY: 'auto' }}>
                                <Typography variant="h6" sx={{ display: 'block' }}>
                                    {news.title} {/* Display the title of the news article */}
                                </Typography>
                                {news.urlToImage && (
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        width="100%"
                                        image={news.urlToImage} // Display the article image
                                        alt={`${news.title} image`} // Alt text for accessibility
                                        sx={{ marginTop: 2, maxHeight: '400px', maxWidth: '800px', objectFit: 'cover', objectPosition: 'center' }}
                                    />
                                )}
                                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                                    {news.description} {/* Display the full description of the news article */}
                                </Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 1 }}>
                                    <Typography variant="caption" color="text.secondary">
                                        {new Date(news.publishedAt).toLocaleDateString()} {/* Format and display the publication date */}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        By {news.author || 'Unknown'} {/* Display the author of the article, defaulting to 'Unknown' */}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
            )}
        </Stack>
    );
}

export default NewsFeed; // Export the NewsFeed component for use in other parts of the application
