import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const url = `https://dry-gorge-55109.herokuapp.com/books/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to Delete? ");
    if (proceed) {
      const url = `https://dry-gorge-55109.herokuapp.com/books/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const reaminingBooked = books.filter((book) => book._id !== id);
            setBooks(reaminingBooked);
          }
        });
    }
  };
  return (
    <div>
      <Helmet>
        <title>DashBoard</title>
      </Helmet>
      <h2 className="text-center my-2">My Offers</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">Mobile</th>
            <th scope="col">Offer Name</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.displayName}</td>
              <td>{book.email}</td>
              <td>{book.address}</td>
              <td>{book.city}</td>
              <td>{book.phone}</td>
              <td>{book.name}</td>
              <td>{book.tripDate}</td>
              <td>
                <button
                  className="me-3 text-danger"
                  onClick={() => handleDelete(book._id)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
