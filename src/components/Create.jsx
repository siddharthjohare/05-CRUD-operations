import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(name, email);
    console.log("handleSubmit called");
    e.preventDefault();
    axios
      .post("https://69fae77488a7af0ecca7e85e.mockapi.io/crud", {
        name: name,
        email: email,
      })
      .then(() => {
        alert("Data Added Successfully");
        navigate("/read");
      });
  };

  return (
    <>
      {/* Top Heading */}
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>

        {/* Button to navigate to the Read page */}
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
