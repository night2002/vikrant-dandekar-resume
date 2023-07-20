import Navbar from "./Navbar"
import Home from "./pages/Home"
import Academics from "./pages/Academics"
import Hobbies from "./pages/Hobbies"
import {Route,Routes} from "react-router-dom"
import Education from "./pages/Education"
import Animewatchlist from "./pages/Animewatchlist"
import BudgetTracker from "./pages/BudgetTracker"
import Projects from "./pages/Projects"


function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/vikrant-dandekar-resume" element={<Home/>} />
        <Route path="/vikrant-dandekar-resume/academics" element={<Academics/>}>
          <Route path="/vikrant-dandekar-resume/academics/Projects" element={<Projects/>}>
            <Route path="/vikrant-dandekar-resume/academics/Projects/Animewatchlist" element={<Animewatchlist/>}/>
            <Route path="/vikrant-dandekar-resume/academics/Projects/BudgetTracker" element={<BudgetTracker/>}/>
          </Route>
          <Route path="/vikrant-dandekar-resume/academics/education" element={<Education/>} />
        </Route>
        <Route path="vikrant-dandekar-resume/hobbies" element={<Hobbies/>} />
      </Routes>
    </div>
    </>
  )

}

export default App;
