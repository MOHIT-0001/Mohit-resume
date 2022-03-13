import React from 'react'
import {Link} from "react-router-dom";
  import img from './images/download(4).jpg'


const Sidebar = () => {
    return(
        
            <aside id="sidebar_1">
                <ul>
                    <li className="mr-2"><img  src={img} alt="" /></li>
                    <li className="mx-2"><Link to="/about"><i className="fa-solid fa-user"></i></Link></li>
                    <li className="mx-2"><Link to="/contact"><i className="fa-solid fa-phone"></i></Link></li>
                    <li className="mx-2"><Link to="/works"><i className="fa-solid fa-glasses"></i></Link></li>
                    <li className="mx-2"><Link to="/resume"><i className="fa-solid fa-briefcase"></i></Link></li>
                    <li className="mx-2"><a href="./resume/MohitResume.pdf" download><i className="fa-solid fa-cloud-arrow-down"></i></a></li>
                </ul>
            </aside>

  
    )
}

export default Sidebar;

                