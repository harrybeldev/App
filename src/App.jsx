import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar'
import HomeScreen from "./Pages/Home/Homescreen/HomeScreen";

import TicTacToe from "./Pages/Home/TicTacToeModules/TicTacToe";
import BudgetApp from "./Pages/Home/BudgetModules";



function App() {
  
  return (
    <Router>
      <div>
          <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          {/* <Route path="/budget" element={<Budget />}></Route> */}
          <Route path="/budgetapp" element={<BudgetApp />}></Route>
          <Route path="/tic-tac-toe" element={<TicTacToe />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
