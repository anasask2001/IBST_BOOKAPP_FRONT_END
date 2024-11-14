import React from "react";
import bookimg from "../assets/book.png";
import bookInstance from "../axios_interseptor/bookAxios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const BooksView = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["Get_books"],
    queryFn: async () => {
      const response = await bookInstance.get(`/books`);
      return response.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await bookInstance.patch(`/books/${id}`);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["Get_books"]);
    },
    onError: (error) => {
      console.error("Error deleting the book:", error.message);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  if (!data || data.length === 0) {
    return (
      <div className="h-screen w-full grid place-content-center text-gray-600">
        No books available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6 min-h-screen">
      {data.map((book) => (
        <div
          key={book?._id}
          className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 object-cover w-full h-[450px] flex flex-col justify-between"
        >
          <div className="p-4 flex flex-col flex-grow">
            <img
              className="w-32 h-40 object-cover rounded-lg mb-4 mx-auto"
              src={book.image || bookimg}
              alt={book?.title}
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
              {book?.title}
            </h3>
            <p className="text-gray-600 text-sm text-center mb-3">
              By: {book?.author}
            </p>
            <div className="h-28 overflow-auto">
              <p className="text-gray-500 text-xs text-justify mt-2">
                {book?.description}
              </p>
            </div>
          </div>

          <div className="p-3 flex justify-center">
            <button
              onClick={() => handleDelete(book?._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksView;
