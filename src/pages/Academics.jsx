
import Education from "./Education"
import Navbar_Academics from "../Navbar_Academics"
import { Link,Route,Routes, useLocation } from "react-router-dom"
import tsec from '../assets/tsec.jpg'
import stanislaus from '../assets/stanislaus.png'
import nirmala from '../assets/nirmala.jpg'
import Animewatchlist from "./Animewatchlist"
import Projects from "./Projects"
export default function Academics(){
    const location=useLocation();
    if(location.pathname=='/vikrant-dandekar-resume/academics')
    {
        return (
            <>
            <Navbar_Academics />
            <div>
                <Routes>
                    <Route path="/vikrant-dandekar-resume/academics/education" element={<Education/>} />
                    <Route path="Projects/*" element={<Projects/>} />
                </Routes>
            </div>
            <div className="bg_Acadmics">
                <div className="Academics-container">
                <div className="heading">
                <h3 className="head"><a className="a" href="https://tsec.edu/">College: Thadomal Shahani College of Engineering</a></h3>
                </div>
                <div className="item-1">
                <img src={tsec} width="400" height="350"/>
                </div>
                <div className="heading">
                <h3 className="head"><a className="a" href="http://stanislausbandra.in/">School: St. Stanislaus High School</a></h3>
                <div className="stanislaus"></div>
                </div>
                <div className="item-2">
                <img src={stanislaus} width="400" height="350"/>
                </div>
                <div className="academics_inline_2">   
                <div className="heading"> 
                <h3 className="head"><a className="a"href="https://nmfdegree.edu.in/">Jr College: Nirmala Memorial Foundation College</a></h3>
                <div className="nirmala"></div>    
                </div>
                </div>
                <div className="item-3">
                <img src={nirmala} width="400" height="350"/>
                </div> 
                </div>
            </div>
            </>
        )
    }
    return (
        <>
        <Navbar_Academics/>
        <div>
            <Routes>
                <Route path="education" element={<Education/>} />
                <Route path="Projects/*" element={<Projects/>} />
            </Routes>
        </div>
        </>
    )
}
