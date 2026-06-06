import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function getData() {
    axios
      .get("https://69fae77488a7af0ecca7e85e.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        console.log("getData called");
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://69fae77488a7af0ecca7e85e.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  // Store data in LocalStorage so it can be accessed by the Update component.
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  // Component load hote hi chalega
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          {/* 1. Use data.map() here to render the list of items */}
          <tbody>
            {data.map((eachData, index) => {
              return (
                <tr key={eachData.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-primary"
                        onMouseDown={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* Create Page Button */}
        <Link to="/">
          <button className="btn btn-primary">Create</button>
        </Link>
      </div>
    </>
  );
};

export default Read;
