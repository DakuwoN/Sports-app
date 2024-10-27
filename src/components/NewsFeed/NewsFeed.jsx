import React from 'react';
import { Box, Card, CardContent, Typography, Divider, CardMedia, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchNews } from './api';



function NewsFeed() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getNews = async () => {
        try {
          const articles = await fetchNews();
          setNewsData(articles);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch news');
          setLoading(false);
        }
      };
 
      getNews();
    }, []);

    return (  // Add this return statement
        <Stack spacing={2} sx={{ flex: 2, width: { xs: '100%', md: '50%' } }}>
            <Typography variant="h5" gutterBottom>Latest Sports News</Typography>
            {loading ? (
                <Typography>Loading news...</Typography>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                newsData.map((news, index) => (
                    <Card key={index} sx={{ display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3, backgroundColor: '#f5f5f5', overflow: 'visible' }}>
                        <CardContent sx={{ padding: '16px', overflowY: 'auto' }}>
                            <Typography variant="h6" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {news.title}
                            </Typography>
                            {news.urlToImage && (
                                <CardMedia
                                    component="img"
                                    height="100%"
                                    width="100%"
                                    image={news.urlToImage}
                                    alt={`${news.title} image`}
                                    sx={{ marginTop: 2, maxHeight: '400px', maxWidth: '800px', objectFit: 'cover', objectPosition: 'center' }}
                                />
                            )}
                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
                                {news.description}
                            </Typography>
                            <Divider sx={{ marginY: 2 }} />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 1 }}>
                                <Typography variant="caption" color="text.secondary">
                                    {new Date(news.publishedAt).toLocaleDateString()}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    By {news.author || 'Unknown'}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            )}
        </Stack>
    );
}

export default NewsFeed;
