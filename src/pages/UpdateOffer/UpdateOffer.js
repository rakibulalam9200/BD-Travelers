import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const UpdateOffer = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  const {register,handleSubmit,reset } = useForm({defaultValues: offer});

  useEffect(() => {
    const url = `https://dry-gorge-55109.herokuapp.com/offers/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);
 
    const onSubmit = (data) => {
      console.log(data);
      axios
        .put(`https://dry-gorge-55109.herokuapp.com/offers/${id}`, data)
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            setOffer(res.data);
            reset(res.data);
            alert("Updated Successfully");
          }
        });
  
    };

    useEffect(() => {
      console.log(offer);
    }, [offer]);
  
  return (
    <div className="addOffer">
      <Helmet>
        <title>Update Offer</title>
      </Helmet>
      <h2 className="text-center my-3">Update Offer</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={offer.name}
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Enter Offer Name" 
          />
          <textarea
            defaultValue={offer.description}
            {...register("description")}
            placeholder="Description" 
          />
          <input
            defaultValue={offer.fee}
            type="number"
            {...register("fee")}
            placeholder="Fee" 
          />
          <input
            defaultValue={offer.tripDate}
            {...register("tripDate")}
            placeholder="Enter Date and Time of Trip" 
          />
          <input
            defaultValue={offer.tripDuration}
            {...register("tripDuration")}
            placeholder="Enter days and Nights Number"
          />
          <input
            defaultValue={offer.img}
            {...register("img")}
            placeholder="Enter Your Image URL" 
          />
          <input type="submit" value="Update" />
        </form>
      </div>
    </div>
  );
};

export default UpdateOffer;
