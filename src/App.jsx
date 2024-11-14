import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateBook from "./pages/CreateBook";
import BooksView from "./pages/BooksView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksView />} />
          <Route path="/book/create" element={<CreateBook />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
