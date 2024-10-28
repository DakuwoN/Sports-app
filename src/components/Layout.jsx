import React from 'react'; // Import React library
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering nested routes
import Header from "./Header/Header.jsx"; // Import the Header component
import { Box } from '@mui/material'; // Import Box component from Material-UI for layout

/**
 * Layout component that provides a consistent structure for the application.
 * It includes a header and a main content area where nested routes will be rendered.
 */
function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header component that remains constant across different pages */}
      <Header />  
      
      {/* Main content area where nested routes will be rendered */}
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />  {/* Outlet renders the matched child route component */}
      </Box>
    </Box>
  );
}

export default Layout; // Export the Layout component for use in other parts of the application
