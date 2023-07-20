
import { Link,Route,Routes, useLocation } from "react-router-dom"
import Animewatchlist from "./Animewatchlist"
import BudgetTracker from "./BudgetTracker"
import Navbar_Projects from "../Navbar_Projects"
export default function Projects(){
    const location=useLocation();
    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };
    const columns = [
        {
            name: 'Education',
            selector: row => row.title,
            wrap:true,
            center: true
        },
    
        {
            name: 'Percentage',
            selector: row => row.percentage,
            wrap:true,
            center: true
        },
        {
            name: 'Month & Year',
            selector:row=>row.Year,
            wrap:true,
            center:true
        }
    ];
    const data = [
        {
            id: 1,
            title: 'HSC',
            percentage: '77%',
            Year: 'February 2020'
        },
        {
            id: 2,
            title: 'SSC',
            percentage: '83%',
            Year: 'March 2018'
        }
        
    ]
    if(location.pathname=='/vikrant-dandekar-resume/academics/Projects')
    {
        return (
            <>
            <Navbar_Projects />
            <div>
                <Routes>
                    <Route path="/vikrant-dandekar-resume/academics/Projects/Animewatchlist" element={<Animewatchlist/>} />
                    <Route path="/vikrant-dandekar-resume/academics/Projects/BudgetTracker" element={<BudgetTracker/>} />
                </Routes>
            </div>
            <div className="bg_Acadmics">
            <div className="project-title-align">
                <div className='education-title'>
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="spacer_project">

            </div>
            <div className="project-align">
            <div className="education-table">
                <table id="College">
                    <tr>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Software</th>
                    </tr>
                    <tr>
                        <td>Anime Watchlist</td>
                        <td><a href="https://night2002.github.io/anime-watchlist/">https://night2002.github.io/anime-watchlist/</a></td>
                        <td>React.js + REST API</td>
                    </tr>
                    <tr>
                        <td>Budget Tracker</td>
                        <td><a href="https://night2002.github.io/budget-tracker/">https://night2002.github.io/budget-tracker/</a></td>
                        <td>React.js + React-chart-2 package</td>
                    </tr>
                </table>
            </div>
            </div>
            </div>
            </>
        )
    }
    return (
        <>
        <Navbar_Projects/>
        <div>
            <Routes>
                <Route path="Animewatchlist" element={<Animewatchlist/>} />
                <Route path="BudgetTracker" element={<BudgetTracker/>} />
            </Routes>
        </div>
        </>
    )
}
