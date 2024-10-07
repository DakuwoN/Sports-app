import { Link } from "react-router-dom";  // Importing Link component for routing
import { AppBar, Toolbar, Typography, Box } from "@mui/material";  // Material UI components
import { styled } from '@mui/system';  // Importing MUI's styled utility for custom styles

// Create a styled Link component with Material UI's `styled` utility
const StyledLink = styled(Link)({
    textDecoration: 'none',  // Removes underline
    color: 'white',        // Inherits the color from the parent
    '&:hover': {             // Optional: Customize hover state
        color: '#f50057',    // Example hover color
        textDecoration: 'none',  // Optional underline on hover
    },
});

function Header() {
    return (
        <header>  
            <nav>
                <AppBar position="static">  {/* AppBar provides the top navigation bar */}
                    <Toolbar>  {/* Toolbar acts as a container for AppBar items */}
                        {/* Typography for the App title */}
                        <Typography variant="h6" sx={{flexGrow: 1}}>Gamble</Typography>  
                        {/* Box to hold the navigation links, with flex display for horizontal layout */}
                        <Box sx={{ display: 'flex', gap: 2 }}>  
                            {/* Individual links to different routes */}
                            <StyledLink to="/nfl">NFL</StyledLink>
                            <StyledLink to="/nba">NBA</StyledLink>
                            <StyledLink to="/nhl">NHL</StyledLink>
                            <StyledLink to="/login">Login</StyledLink>
                            <StyledLink to="/signup">Sign Up</StyledLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </nav>
        </header>
    );
}

export default Header;  // Exporting the Header component for use in other parts of the app
