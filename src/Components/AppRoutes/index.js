import { BrowserRouter, Route, Routes } from "react-router-dom";
import Myprofile from "../../Pages/Myprofile";
import Tailorapplication from "../../Pages/Tailorapplication";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/myprofile" element={<Myprofile />}></Route>
      <Route path="/tailorapplication" element={<Tailorapplication />}></Route>
    </Routes>
  );
}
export default AppRoutes;
