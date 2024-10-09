import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function HomePage() {
  // Sample news data
  const sampleNewsData = [
    { title: 'NFL Week 1 Highlights', description: 'Catch up on all the action from the first week of the NFL season.' },
    { title: 'NBA Preseason Updates', description: 'Key takeaways from the NBA preseason games so far.' },
    { title: 'NHL Trade Rumors', description: 'Latest NHL trade rumors ahead of the new season.' },
  ];

  return (
    <Box
      sx={{
        height: '80vh',         // Parent container height for the viewport
        overflowY: 'auto',      // Enable vertical scrolling if needed
        display: 'flex',        // Flexbox to allow vertical alignment
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,                 // Space between cards
        padding: 2,
      }}
    >
      {sampleNewsData.map((news, index) => (
        <Card
          key={index}
          sx={{
            width: '700px',           // Fixed width
            display: 'flex',          // Flexbox for layout
            flexDirection: 'column',  // Stack content vertically
            justifyContent: 'center', // Center content vertically
            alignItems: 'center',     // Center content horizontally
            textAlign: 'center',      // Center text in the middle
            overflow: 'hidden',       // Prevent content overflow
            border: '1px solid black' // Optional border to visualize the card size
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {news.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default HomePage;
