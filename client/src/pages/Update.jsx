import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { BsPencilSquare } from "react-icons/bs";

const Update = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [city, setCity] = useState("");
  const gotoHome = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((response) => {
        setName(response.data.name);
        setEmail(response.data.email);
        setMobile(response.data.mobile);
        setCity(response.data.city);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/update/" + id, { name, email, mobile, city })
      .then((result) => {
        console.log(result);
        gotoHome("/");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setData((recentData) => ({
      ...recentData,
      [e.target.name]: e.target.value,
    }));
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
            <BsPencilSquare className="m-1" />
            Update Contact
          </h5>

          <div className="my-3">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/crud/">Home</a>
              </li>
              <li className="breadcrumb-item">Update Contact</li>
            </ul>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleUpdate}>
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
                  value={name}
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
                  value={email}
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
                  value={mobile}
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
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <input
                  type="submit"
                  name="update"
                  className="btn btn-success me-3"
                  value="Update"
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

export default Update;
