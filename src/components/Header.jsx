import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";  // Material UI components
import { Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';


function Header() {
    return (
        <header>  
            <nav>
                <AppBar position="static">  {/* AppBar provides the top navigation bar */}
                    <Toolbar>  {/* Toolbar acts as a container for AppBar items */}
                        {/* Typography for the App title */}
                        <Typography variant="h6" sx={{flexGrow: 1}}>Gamble</Typography>  
                        {/* Box to hold the navigation links, with flex display for horizontal layout */}
                        <Box sx={{ display: 'flex', gap: 6, alignItems: 'center' }}>  
                            {/* Individual links to different routes */}
                            <Link component={RouterLink} to="/nfl" color="inherit">NFL</Link>
                            <Link component={RouterLink} to="/nba">NBA</Link>
                            <Link component={RouterLink} to="/nhl">NHL</Link>
                            <Box sx={{
                                height: '64px',
                                width: '2px',
                                backgroundColor: 'white',
                                marginX: 2
                            }} />
                            <Box sx={{display: 'flex', gap: 6, alignItems: 'center'}}>
                                <Button component={RouterLink} to="/login" variant="outlined" color="inherit">Login</Button>
                                <Button component={RouterLink} to="/signup" variant="contained" color="secondary">Sign Up</Button> 
                            </Box>                           
                        </Box>
                    </Toolbar>
                </AppBar>
            </nav>
        </header>
    );
}

export default Header;  // Exporting the Header component for use in other parts of the app
