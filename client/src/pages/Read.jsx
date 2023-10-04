import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsEye } from "react-icons/bs";

const Read = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [city, setCity] = useState("");

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

  return (
    <div>
      <nav class="navbar navbar-expand bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand text-warning">
            Contact Management
          </a>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <h5>
            <BsEye className="m-1" />
            Read Contact
          </h5>
          <hr />

          <div className="my-3">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/crud/">Home</a>
              </li>
              <li className="breadcrumb-item">Read Contact</li>
            </ul>
          </div>

          <div className="col-md-8 mt-3">
            <ul className="list-group mx-auto">
              <li className="list-group-item">
                <strong>ID : </strong>
                {id}
              </li>
              <li className="list-group-item">
                <strong>Name : </strong>
                {name}
              </li>
              <li className="list-group-item">
                <strong>Email : </strong>
                {email}
              </li>
              <li className="list-group-item">
                <strong>Mobile : </strong>
                {mobile}
              </li>
              <li className="list-group-item">
                <strong>City : </strong>
                {city}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
