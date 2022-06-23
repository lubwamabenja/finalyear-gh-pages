import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./blog/Blog";
import Isaac from "./blog/Isaac";
import Mahad from "./blog/Mahad";
import Kintu from "./blog/Kintu";
import Japha from "./blog/Japha";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="isaac" element={<Isaac />} />
        <Route path="mahad" element={<Mahad />} />
        <Route path="kintu" element={<Kintu />} />} />
        <Route path="kasozi" element={<Japha />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
