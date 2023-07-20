import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="nav">
            <Link to="/vikrant-dandekar-resume" className="site-title">Vikrant Dandekar</Link>
            <ul>
                <Link to="vikrant-dandekar-resume/academics">Academics</Link>
                <Link to="vikrant-dandekar-resume/hobbies">Hobbies</Link>
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