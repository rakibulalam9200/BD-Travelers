import React from "react";
import { Link } from "react-router-dom";
import useOffers from "../../hooks/useOffers";

const ManageOffer = () => {
  const [offers, setOffers] = useOffers([]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to Delete? ");
    if (proceed) {
      const url = `https://dry-gorge-55109.herokuapp.com/offers/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remainingOffers = offers.filter((offer) => offer._id !== id);
            setOffers(remainingOffers);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center my-2">Manage Offers</h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Duration</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer._id}>
              <td>{offer.name}</td>
              <td>{offer.tripDate}</td>
              <td>{offer.tripDuration}</td>
              <td>
                <Link to={`/updateOffer/${offer._id}`}>
                  <button className="me-3 text-warning">
                    <i className="fas fa-edit"></i>
                  </button>
                </Link>

                <button
                  className="me-3 text-danger"
                  onClick={() => handleDelete(offer._id)}
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

export default ManageOffer;
