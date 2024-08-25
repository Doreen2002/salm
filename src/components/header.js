
import { Link } from "react-router-dom"

import PathConstants from "../routes/path_constants"


export default function Header()
{
    return(
        <div className="header-links-container">
            <div className="logo">Salm</div>
            <div>
            <ul className="header-links">
                <li><Link to = {PathConstants.Home}>Home</Link></li>
                <li><Link to = {PathConstants.About}>About</Link></li>
                <li><Link to = {PathConstants.About}>Stories</Link></li>
            </ul>
            </div>
           
        </div>
    )
}