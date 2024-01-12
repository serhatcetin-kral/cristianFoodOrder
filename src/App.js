import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Order from "./Order";
import Info from "./Info";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Order" element={ <Order/> } />
        <Route path="/Info" element={ <Info/> } />
      </Routes>
    </div>
  )
}

export default App