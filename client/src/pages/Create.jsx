import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { BsPersonAdd } from "react-icons/bs";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(null);
  const [city, setCity] = useState("");
  const gotoHome = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create", { name, email, mobile, city })
      .then((result) => {
        console.log(result);
        gotoHome("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand text-warning">
            Contact Management
          </Link>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <h5>
            <BsPersonAdd className="m-1" />
            Add New Contact
          </h5>

          <div className="my-3">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/crud/">Home</a>
              </li>
              <li className="breadcrumb-item">Add New Contact</li>
            </ul>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="col-md-12">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control mb-3"
                  placeholder="Enter Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control mb-3"
                  placeholder="Enter Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="mobile" className="form-label">
                  Mobile No
                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="form-control mb-3"
                  placeholder="Enter Mobile No"
                  required
                  onChange={(e) => setMobile(e.target.value)}
                />

                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="form-control mb-3"
                  placeholder="Enter City"
                  required
                  onChange={(e) => setCity(e.target.value)}
                />

                <input
                  type="submit"
                  name="addnew"
                  className="btn btn-success me-3"
                  value="Add New"
                />

                <input
                  type="reset"
                  name="reset"
                  className="btn btn-danger"
                  value="Reset"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
