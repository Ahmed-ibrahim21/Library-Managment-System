import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserBorrowedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("userData"))?.user_id;
      const response = await axios.post(
        "http://localhost:8080/borrow/getUserBooks",
        userId,
        { headers: { "Content-Type": "application/json" } }
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const returnBook = async (ISBN) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/borrow/respondBorrowRequest/${ISBN}`,
        3,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response);
      // After successful return, fetch the updated list of books
      fetchData();
    } catch (error) {
      console.error("Error returning book:", error);
      alert("Error returning book");
    }
  };

  return (
    <section>
      <div className="container py-4">
        <div className="head d-flex justify-content-center">
          <h1>Our Books</h1>
        </div>
        <div className="books d-flex py-5 row">
          {books.length < 1 ? (
            <div>You Have No Borrowed Books</div>
          ) : (
            books.map((book) => (
              <div key={book.borrow_id} className="col-lg-4 py-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Book ISBN {book.isbn}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      borrow_id {book.borrow_id}
                    </h6>
                    <p className="card-text">{book.avl_copies}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => returnBook(book.borrow_id)}
                    >
                      Return
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
