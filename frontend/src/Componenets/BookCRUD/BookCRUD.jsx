import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BookCRUD() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    rack_no: "",
    avl_copies: "",
  });

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

  const DeleteBook = async (isbn) => {
    try {
      const res = await axios.put(`http://localhost:8080/Book/Delete/${isbn}`, {
        headers: { "Content-Type": "application/json" },
      });

      // After successfully validating the user, fetch the updated list of users
      const response = await axios.get("http://localhost:8080/Book/Read");
      setBooks(response.data); // Update the Users state with the new list of users
      if (res.data == false) {
        alert("can't delete a book that is borrowed");
      }
    } catch (error) {
      alert("Validating process error");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // Call the API endpoint for creating a book
      const response = await axios.post(
        "http://localhost:8080/Book/add",
        formData
      );
      // Update the books list with the new data
      const res = await axios.get("http://localhost:8080/Book/Read");
      setBooks(res.data);
      // Clear the form data
      setFormData({
        title: "",
        author: "",
        isbn: "",
        rack_no: "",
        avl_copies: "",
      });
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // Call the API endpoint for updating a book
      const response = await axios.put(
        `http://localhost:8080/Book/Update/${formData.isbn}`,
        formData
      );
      // Update the books list with the updated data
      const res = await axios.get("http://localhost:8080/Book/Read");
      setBooks(res.data); // Update the Users state with the new list of users
      // Clear the form data
      setFormData({
        title: "",
        author: "",
        isbn: "",
        rack_no: "",
        avl_copies: "",
      });
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      // Call the API endpoint for deleting a book
      await axios.put(`http://localhost:8080/Books/Delete/${formData.isbn}`);
      // Remove the deleted book from the books list
      setBooks(books.filter((book) => book.isbn !== formData.isbn));
      // Clear the form data
      setFormData({
        title: "",
        author: "",
        isbn: "",
        rack_no: "",
        avl_copies: "",
      });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <>
      <section>
        <div className="container py-4">
          <div className="head d-flex justify-content-center">
            <h1>Books</h1>
          </div>
          {/* Search bar */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by isbn"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="books d-flex py-5 row">
            {books.map((book) => (
              <div key={book.isbn} className="col-lg-4 py-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {book.author}
                    </h6>
                    <p className="card-text">
                      Available copies: {book.avl_copies} & isbn: {book.isbn}
                    </p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => DeleteBook(book.isbn)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container">
        <div>
          <h1 className="py-5 text-center">CRUD Operations</h1>
        </div>
        {/* Common form with input fields */}
        <form onSubmit={handleCreate}>
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Title
            </label>
            <input
              type="title"
              className="form-control"
              id="titleInput"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorInput" className="form-label">
              Author
            </label>
            <input
              type="author"
              className="form-control"
              id="authorInput"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="rack_noInput" className="form-label">
              Rack number
            </label>
            <input
              type="text"
              className="form-control"
              id="rack_noInput"
              value={formData.rack_no}
              onChange={(e) =>
                setFormData({ ...formData, rack_no: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="avl_copiesInput" className="form-label">
              Available copies
            </label>
            <input
              type="number"
              className="form-control"
              id="avl_copiesInput"
              value={formData.avl_copies}
              onChange={(e) =>
                setFormData({ ...formData, avl_copies: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mr-3">
            Add
          </button>
        </form>
        {/* Update form */}
        <form onSubmit={handleUpdate} className="py-5 my-5">
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">
              Title
            </label>
            <input
              type="title"
              className="form-control"
              id="titleInput"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="authorInput" className="form-label">
              Author
            </label>
            <input
              type="author"
              className="form-control"
              id="authorInput"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="isbnInput" className="form-label">
              isbn
            </label>
            <input
              type="number"
              className="form-control"
              id="isbnInput"
              value={formData.isbn}
              onChange={(e) =>
                setFormData({ ...formData, isbn: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rack_noInput" className="form-label">
              Rack number
            </label>
            <input
              type="text"
              className="form-control"
              id="rack_noInput"
              value={formData.rack_no}
              onChange={(e) =>
                setFormData({ ...formData, rack_no: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="avl_copiesInput" className="form-label">
              Available copies
            </label>
            <input
              type="number"
              className="form-control"
              id="avl_copiesInput"
              value={formData.avl_copies}
              onChange={(e) =>
                setFormData({ ...formData, avl_copies: e.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mr-3">
            Update
          </button>
        </form>
      </section>
      <section className="container d-flex justify-content-center">
        <Link to="/ManageBorrowRequests" className="btn btn-warning mx-2">
          Manage borrow Requests 💼
        </Link>
        <Link to="/AdminHome" className="btn btn-warning mx-2">
          Validate Users ✅
        </Link>
        <Link to="/BookCRUD" className="btn btn-warning mx-2">
          Manage Books 📖
        </Link>
      </section>
    </>
  );
}
