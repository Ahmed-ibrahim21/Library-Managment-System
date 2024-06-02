import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageBorrowRequests() {
  const [BorrowRequests, setBorrowRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/borrow/getPendingBorrowRequests"
        );
        setBorrowRequests(response.data);
      } catch (error) {
        console.error("Error fetching BorrowRequests:", error);
      }
    };

    fetchData();
  }, []);

  const AcceptBorrow = async (borrow_id) => {
    try {
      const valid = 1;
      await axios.put(
        `http://localhost:8080/borrow/respondBorrowRequest/${borrow_id}`,
        valid,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // After successfully validating the user, fetch the updated list of users
      const response = await axios.get(
        "http://localhost:8080/borrow/getPendingBorrowRequests"
      );
      setBorrowRequests(response.data); // Update the Users state with the new list of users
    } catch (error) {
      alert("error");
    }
  };
  const RejectBorrow = async (borrow_id) => {
    try {
      const valid = 2;
      await axios.put(
        `http://localhost:8080/borrow/respondBorrowRequest/${borrow_id}`,
        valid,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // After successfully validating the user, fetch the updated list of users
      const response = await axios.get(
        "http://localhost:8080/borrow/getPendingBorrowRequests"
      );
      setBorrowRequests(response.data); // Update the Users state with the new list of users
    } catch (error) {
      alert("Validating process error");
    }
  };

  return (
    <>
      <section>
        <div className="container py-4">
          <div className="head d-flex justify-content-center">
            <h1>Manage BorrowRequests</h1>
          </div>
          <div className="input-group mb-3 d-flex justify-content-center">
            <div className="BorrowRequests d-flex py-5 row">
              {BorrowRequests.map((borrow) => (
                <div key={borrow.borrow_id} className="col-lg-4 py-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">
                        request id : {borrow.borrow_id}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        Book : {borrow.isbn} user : {borrow.user_id}
                      </h6>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => AcceptBorrow(borrow.borrow_id)}
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-4"
                        onClick={() => RejectBorrow(borrow.borrow_id)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
