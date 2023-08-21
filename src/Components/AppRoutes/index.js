import { BrowserRouter, Route, Routes } from "react-router-dom";
import Myprofile from "../../Pages/Myprofile";
import Tailorapplication from "../../Pages/Tailorapplication";
import VetApplication from "../../Pages/VetApplication";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Myprofile />}></Route>
      <Route path="/tailorapplication" element={<Tailorapplication />}></Route>
      <Route path="/vetapplication" element={<VetApplication />}></Route>
      
    </Routes>
  );
}
export default AppRoutes;
