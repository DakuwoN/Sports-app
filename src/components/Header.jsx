import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <li><Link to="/nfl">NFL</Link></li>
                <li><Link to="/nba">NBA</Link></li>
                <li><Link to="/nhl">NHL</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </nav>
        </header>
    );
}

export default Header;