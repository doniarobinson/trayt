import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Landing from "./components/content/Landing";

export default function Main() {
  return (
    <div className="main">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}
