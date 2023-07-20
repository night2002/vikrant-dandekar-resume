import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar_Academics(){
    return(
        <nav className="nav">
            <ul>
                <Link to="education">Grades</Link>
                <Link to="Projects">Projects</Link>
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