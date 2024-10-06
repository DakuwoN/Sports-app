import { Link } from "react-router-dom";  // Importing Link component for routing
import { AppBar, Toolbar, Typography, Box } from "@mui/material";  // Material UI components

function Header() {
    return (
        // Semantic HTML for better accessibility and SEO
        <header>  
            <nav>
                <AppBar position="static">  {/* AppBar provides the top navigation bar */}
                    <Toolbar>  {/* Toolbar acts as a container for AppBar items */}
                        {/* Typography for the App title */}
                        <Typography variant="h6" sx={{flexGrow: 1}}>Gamble</Typography>  
                        {/* Box to hold the navigation links, with flex display for horizontal layout */}
                        <Box sx={{ display: 'flex', gap: 2 }}>  
                            {/* Individual links to different routes */}
                            <Link to="/nfl">NFL</Link>
                            <Link to="/nba">NBA</Link>
                            <Link to="/nhl">NHL</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </nav>
        </header>
    );
}

export default Header;  // Exporting the Header component for use in other parts of the app
