import React from 'react';
import { Box, Card, CardContent, Typography, Divider, CardMedia, Stack } from '@mui/material';
import NewsFeed from '../NewsFeed/NewsFeed.jsx'


function HomePage() {

    

  
  

 

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
    <Box sx={{ flex: 1, overflowY: 'auto', padding: 2 }}>
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

       <NewsFeed/>

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
