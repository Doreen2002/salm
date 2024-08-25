
import { Outlet, Link } from "react-router-dom";

import PathConstants from "../routes/path_constants"


export default function Layout()
{
    return(
        <>
        <div className="header-links-container">
            <div className="logo">Salm</div>
            <div>
            <nav>
            <ul className="header-links">
                <li><Link to = {PathConstants.Home}>Home</Link></li>
                <li><Link to = {PathConstants.About}>About</Link></li>
                <li><Link to = {PathConstants.Stories}>Stories</Link></li>
            </ul>
           </nav>
            </div>
         
        </div>
        <Outlet/>
        <div className="footer">

        </div>
        </>
        
    )
}