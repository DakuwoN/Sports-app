import React from 'react';
import { Box, Card, CardContent, Typography, Divider, CardMedia, Stack } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
function HomePage() {
  
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
              country: 'us',
              category: 'sports',
              apiKey: process.env.REACT_APP_NEWS_API_KEY
            }
          });
          setNewsData(response.data.articles);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch news');
          setLoading(false);
        }
      };
  
      fetchNews();
    }, []);
  
    

  
  

 

  const upcomingGames = [
    { homeTeam: 'Lakers', awayTeam: 'Warriors', date: 'Oct 15, 2024', time: '8:00 PM ET' },
    { homeTeam: 'Celtics', awayTeam: 'Nets', date: 'Oct 16, 2024', time: '7:30 PM ET' },
    { homeTeam: 'Heat', awayTeam: 'Bucks', date: 'Oct 17, 2024', time: '8:00 PM ET' },
  ];

  const fantasyScores = [
    { rank: 1, teamName: "Dunk Masters", owner: "John Doe", points: 156 },
    { rank: 2, teamName: "Hoop Dreams", owner: "Jane Smith", points: 149 },
    { rank: 3, teamName: "Slam Dunkers", owner: "Mike Johnson", points: 142 },
    { rank: 4, teamName: "Court Kings", owner: "Sarah Brown", points: 138 },
    { rank: 5, teamName: "Basket Cases", owner: "Tom Wilson", points: 135 },
  ];

  return (
    <Box sx={{ height: '80vh', overflowY: 'auto', padding: 2 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        {/* Upcoming Games Column */}
        <Stack spacing={2} sx={{ flex: 1, width: { xs: '100%', md: '25%' } }}>
          <Typography variant="h6">Upcoming Games</Typography>
          {upcomingGames.map((game, index) => (
            <Card key={index} sx={{ backgroundColor: '#f5f5f5' }}>
              <CardContent>
                <Typography variant="subtitle2">{game.homeTeam} vs {game.awayTeam}</Typography>
                <Typography variant="body2" color="text.secondary">{game.date}</Typography>
                <Typography variant="body2" color="text.secondary">{game.time}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* News Feed Column */}
        <Stack spacing={2} sx={{ flex: 2, width: { xs: '100%', md: '50%' } }}>
          <Typography variant="h5" gutterBottom>Latest Sports News</Typography>
          {loading ? (
            <Typography>Loading news...</Typography>
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            newsData.map((news, index) => (
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  boxShadow: 3,
                  backgroundColor: '#f5f5f5',
                  overflow: 'visible',
                }}
              >
                <CardContent sx={{ 
                  padding: '16px',
                  overflowY: 'auto',
                }}>
                  <Typography variant="h6" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {news.title}
                  </Typography>
                  {news.urlToImage && (
                    <CardMedia
                      component="img"
                      height="400"
                      width="400"
                      image={news.urlToImage}
                      alt={`${news.title} image`}
                      sx={{ 
                        marginTop: 2, 
                        maxHeight: '800px',
                        maxWidth: '800px', 
                        objectFit: 'cover', 
                        objectPosition: 'center',
                       }}
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

        {/* Fantasy Scores Column */}
        <Stack spacing={2} sx={{ flex: 1, width: { xs: '100%', md: '25%' } }}>
          <Typography variant="h6">Fantasy Scores</Typography>
          {fantasyScores.map((score, index) => (
            <Card key={index} sx={{ backgroundColor: '#f5f5f5' }}>
              <CardContent>
                <Typography variant="subtitle2">
                  {score.rank}. {score.teamName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Owner: {score.owner}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  Points: {score.points}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default HomePage;
