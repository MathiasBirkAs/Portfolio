import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";


function App() {
  const routes = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/Portfolio", element: <Portfolio/>},
    {path: "/About", element: <About/>}
  ])

  return (
    <>
      <div>
        <Navbar/>
        <div>{routes}</div>
      </div>
    </>
  )
}

export default App
