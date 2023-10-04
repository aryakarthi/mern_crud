import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsEye, BsPencilSquare, BsTrash, BsDatabaseFill } from "react-icons/bs";
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container">
          <a href="#" className="navbar-brand text-warning">
            Contact Management
          </a>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h5>
              <BsDatabaseFill className="me-1" />
              Contact List
            </h5>
            <Link to="/create" className="btn btn-success">
              <i className="mx-1"></i>Add New
            </Link>
          </div>

          <div className="col-md-12 table-responsive mt-3">
            <table className="table table-light table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>City</th>
                  <th>Actions</th>
                  {/* <th>ID</th> */}
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.city}</td>
                    <td className="d-flex gap-1">
                      <Link
                        to={`/read/${user._id}`}
                        className="btn btn-warning btn-sm"
                      >
                        <BsEye />
                      </Link>
                      <Link
                        to={`/update/${user._id}`}
                        className="btn btn-primary btn-sm"
                      >
                        <BsPencilSquare />
                      </Link>
                      <Link
                        to={""}
                        className="btn btn-danger btn-sm"
                        onClick={(e) => handleDelete(user._id)}
                      >
                        <BsTrash />
                      </Link>
                    </td>
                    {/* <td>{user._id}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
