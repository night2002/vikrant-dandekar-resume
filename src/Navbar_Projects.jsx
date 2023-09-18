import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar_Projects(){
    return(
        <nav className="nav">
            <ul>
                <Link to="Animewatchlist">Anime-watchlist</Link>
                <Link to="BudgetTracker">Budget-Tracker</Link>
                <Link to ="springboot">Springboot + MongoDB</Link>
            </ul>
        </nav>
    )

}

function CustomLink({to,children,...props}) {
    const resolvedpath=useResolvedPath(to)
    const isActive=useMatch({path: resolvedpath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}