import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          BookLibrary
        </Link>
        <div>
          <button
            className=" bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700"
            onClick={() => navigate("/book/create")}
          >
            Add Book
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
