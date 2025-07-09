import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css"
import { NavBar } from "./components/NavBar/NavBar";
import { data } from "./data.jsx";
import { Logo } from "./Logo/Logo.jsx";



function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        {
        data.map((obj)=>{
          return(
            <Route  path={obj.route} element={obj.element}/>
          )
        })
      }
      </Routes>
    </Router>
  )
}

export default App

