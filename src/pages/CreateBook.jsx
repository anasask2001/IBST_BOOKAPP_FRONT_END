import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import bookInstance from "../axios_interseptor/bookAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
  });

  const createBookMutation = useMutation({
    mutationFn: async (newBook) => {
      try {
        const response = await bookInstance.post("/books", newBook);
        if (!response.data) {
          throw new Error("Failed to create book");
        }
        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to create book"
        );
      }
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/");
      setFormData({ title: "", author: "", description: "" });
    },
    onError: (error) => {
      toast.error(error.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createBookMutation.mutate(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen opacity-95"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="w-full max-w-lg p-8 bg-black bg-opacity-50 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Create a New Book
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-white"
            >
              Book Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-sm font-medium text-white"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter author's name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
              rows="4"
              placeholder="Enter a brief description of the book"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
              disabled={createBookMutation.isLoading}
            >
              {createBookMutation.isLoading ? "Creating..." : "Create Book"}
            </button>
          </div>
        </form>
        {createBookMutation.isError && (
          <p className="text-red-500 text-center mt-4">
            {createBookMutation.error.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateBook;
