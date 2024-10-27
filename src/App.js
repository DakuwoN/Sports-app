import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary components from React Router for routing
import Layout from './components/Layout.jsx';  // Import the Layout component to wrap around the routes
import HomePage from './components/HomePage/HomePage.jsx';  // Import the HomePage component
import Login from './components/Login/Login.jsx';  // Import the Login component
import Signup from './components/Signup/Signup.jsx';  // Import the SignUp component
import { ThemeProvider, createTheme } from '@mui/material/styles';  // Import ThemeProvider and createTheme from Material UI

// Define your custom theme here using Material UI's createTheme function
const theme = createTheme({
  components: {
    MuiLink: {  // Target the MuiLink component for styling
      styleOverrides: {
        root: {
          textDecoration: 'none',  // Remove underline from links
          color: 'white',  // Set default link color to white
          '&:hover': {  // Define styles for the hover state of links
            color: 'red',  // Change color on hover
            textDecoration: 'none',  // Ensure no underline appears on hover
            cursor: 'pointer',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#3f51b5',  // Define primary color for the theme
    },
    secondary: {
      main: '#f50057',  // Define secondary color for the theme
    },
  },
  typography: {
    fontFamily: 'Arial',  // Set the default font family for the application
  },
});

// Main App component
function App() {
  return (
    <ThemeProvider theme={theme}>  {/* Apply the custom theme using ThemeProvider */}
      <Router>  {/* Set up the Router to handle navigation */}
        <Routes>  {/* Define the routes for the application */}
          {/* Wrapping routes with Layout to provide consistent structure */}
          <Route path="/" element={<Layout />}>  {/* Base route with Layout component */}
            <Route index element={<HomePage />} />  {/* Render HomePage when the base path is matched */}
            <Route path="login" element={<Login />} />  {/* Render Login component when /login is matched */}
            <Route path="signup" element={<Signup />} />  {/* Render SignUp component when /signup is matched */}
            {/* Additional routes can be added here, such as NFL, NBA, NHL */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;  // Export the App component for use in other parts of the application
