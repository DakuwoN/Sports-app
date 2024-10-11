import React from 'react';
import { Box, Card, CardContent, Typography, Divider } from '@mui/material';

function HomePage() {
  const sampleNewsData = [
    { 
      title: 'NFL Week 1 Highlights', 
      description: 'Catch up on all the action from the first week of the NFL season.', 
      date: 'October 10, 2024',
      author: 'John Doe'
    },
    { 
      title: 'NBA Preseason Updates', 
      description: 'Key takeaways from the NBA preseason games so far.', 
      date: 'October 9, 2024',
      author: 'Jane Smith'
    },
    { 
      title: 'NHL Trade Rumors', 
      description: 'Latest NHL trade rumors ahead of the new season.', 
      date: 'October 8, 2024',
      author: 'Mike Johnson'
    },
  ];

  return (
    <Box
      sx={{
        height: '80vh',         
        overflowY: 'auto',      
        display: 'flex',        
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 2,                 
        paddingTop: 1,
      }}
    >
      {sampleNewsData.map((news, index) => (
        <Card
          key={index}
          sx={{
            width: '500px',             
            display: 'flex',            
            flexDirection: 'column',    
            borderRadius: 2,            
            boxShadow: 3,               
            margin: 1,                  
            backgroundColor: '#f5f5f5',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ padding: '16px' }}>
            {/* Title */}
            <Typography variant="h6" sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {news.title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 2 }}>
              {news.description}
            </Typography>

            {/* Divider */}
            <Divider sx={{ marginY: 2 }} />

            {/* Date and Author */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingX: 1 }}>
              <Typography variant="caption" color="text.secondary">
                {news.date}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                By {news.author}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default HomePage;
