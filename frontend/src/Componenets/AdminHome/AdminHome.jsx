import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminHome() {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/User/getRegisterRequests"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching Users:", error);
      }
    };

    fetchData();
  }, []);

  const validateUser = async (user_id) => {
    try {
      const valid = 1;
      await axios.put(`http://localhost:8080/User/Validate/${user_id}`, valid, {
        headers: { "Content-Type": "application/json" },
      });

      // After successfully validating the user, fetch the updated list of users
      const response = await axios.get(
        "http://localhost:8080/User/getRegisterRequests"
      );
      setUsers(response.data); // Update the Users state with the new list of users
    } catch (error) {
      alert("Validating process error");
    }
  };

  const deleteUser = async (user_id) => {
    try {
      await axios.put(`http://localhost:8080/User/Delete/${user_id}`, {
        headers: { "Content-Type": "application/json" },
      });

      // After successfully validating the user, fetch the updated list of users
      const response = await axios.get(
        "http://localhost:8080/User/getRegisterRequests"
      );
      setUsers(response.data); // Update the Users state with the new list of users
    } catch (error) {
      alert("Validating process error");
    }
  };

  return (
    <>
      <section>
        <div className="container py-4">
          <div className="head d-flex justify-content-center">
            <h1>Validate Users</h1>
          </div>
          <div className="input-group mb-3">
            <div className="Users d-flex py-5 row">
              {Users.map((User) => (
                <div key={User.user_id} className="col-lg-4 py-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{User.name}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        {User.email}
                      </h6>
                      <p className="card-text">
                        Address: {User.address} & phone: {User.phone}
                      </p>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => validateUser(User.user_id)}
                      >
                        Validate
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-3"
                        onClick={() => deleteUser(User.user_id)}
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
