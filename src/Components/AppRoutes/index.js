import { BrowserRouter, Route, Routes } from "react-router-dom";
import Myprofile from "../../Pages/Myprofile";
import Tailorapplication from "../../Pages/Tailorapplication";
import Vetapplication from "../../Pages/Vetapplication";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Myprofile />}></Route>
      <Route path="/tailorapplication" element={<Tailorapplication />}></Route>
      <Route path="/vetapplication" element={<Vetapplication />}></Route>
      
    </Routes>
  );
}
export default AppRoutes;
