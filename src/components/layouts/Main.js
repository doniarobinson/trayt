import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Landing from "../content/Landing";
import Calculator from "../content/Calculator";
import Enroll from "../content/Enroll";

export default function Main() {
  return (
    <div className="main">
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </div>
  );
}
