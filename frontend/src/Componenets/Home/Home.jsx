import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Book/Read");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  const sendBorrowRequest = async (isbn) => {
    try {
      const user_id = JSON.parse(localStorage.getItem("userData"))?.user_id;
      if (user_id === undefined) {
        alert("Please log in first");
      } else {
        const status = 0;
        const response = await axios.post(
          "http://localhost:8080/borrow/MakeBorrowRequest",
          {
            user_id,
            isbn,
            status,
          },
          { headers: { "Content-Type": "application/json" } }
        );
        alert("Borrow request sent successfully");
      }
    } catch (error) {
      alert("Error sending request. Please try again.");
    }
  };

  // Filter books by ISBN
  const filteredBooks = books.filter((book) =>
    book.isbn.toString().includes(searchTerm)
  );

  return (
    <section>
      <div className="container py-4">
        <div className="head d-flex justify-content-center">
          <h1>Our Books</h1>
        </div>
        {/* Search bar */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ISBN"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="books d-flex py-5 row">
          {filteredBooks.map((book) => (
            <div key={book.isbn} className="col-lg-4 py-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {book.author}
                  </h6>
                  <p className="card-text">
                    Available copies: {book.avl_copies} & ISBN: {book.isbn}
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => sendBorrowRequest(book.isbn)}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
