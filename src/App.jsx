import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar"
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";






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
