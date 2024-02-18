
import Information from "./pages/Information";
import About_us from "./pages/About_us";
import Culture from "./pages/Culture";
import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/root/Layout";

const prvz = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About_us/>}></Route>
    <Route path="/culture" element={<Culture/>}></Route>
    <Route path="/information" element={<Information/>}></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={prvz}></RouterProvider>
    </>
  )
}

export default App
