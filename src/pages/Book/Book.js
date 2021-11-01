import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const Book = () => {
  const { id } = useParams();
  const { user } = useAuth();
  let [offer, setOffer] = useState({});
  useEffect(() => {
    const url = `https://dry-gorge-55109.herokuapp.com/offers/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let { _id, ...newOffer } = offer;
    data = { ...data, ...newOffer };
    axios
      .post("https://dry-gorge-55109.herokuapp.com/book", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booked the Offer Successfully");
          reset();
        }
      });
  };
  return (
    <div className="addOffer">
      <h2 className="text-center my-3">Booked A Offer</h2>
      <div>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={user.displayName} {...register("displayName")} />

          <input
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            placeholder="Address"
            defaultValue=""
            {...register("address")}
          />
          <input placeholder="City" defaultValue="" {...register("city")} />
          <input
            placeholder="phone number"
            defaultValue=""
            {...register("phone")}
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Book;
