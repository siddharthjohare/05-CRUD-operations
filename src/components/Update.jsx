import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(Number(localStorage.getItem("id")));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updating ID:", id); // Check if the ID is received.

    axios
      .put(`https://69fae77488a7af0ecca7e85e.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then((res) => {
        console.log("Update response:", res.data); // Verify that the record is updated successfully.
        navigate("/read");
        alert("Data Updated Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h2>Update</h2>

      <form onSubmit={handleUpdate}>
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

        <button type="submit" className="btn btn-primary mx-2">
          Update
        </button>
        <Link to="/">
          <button type="button" className="btn btn-secondary mx-3">
            Back
          </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
