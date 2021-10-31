import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddOffer.css";
const AddOffer = () => {
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/offers", data)
      .then((res) => {
        if(res.data.insertedId){
            alert('Added Successfully');
            reset();
        }
      });
  };
  return (
    <div className="addOffer">
      <h2 className="text-center my-3">Add A New Offer</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Enter Offer Name"
          />
          <textarea {...register("description")} placeholder="Description" />
          <input type="number" {...register("fee")} placeholder="Fee" />
          <input
            {...register("tripDate")}
            placeholder="Enter Date and Time of Trip"
          />
          <input
            {...register("tripDuration")}
            placeholder="Enter days and Nights Number"
          />
          <input {...register("img")} placeholder="Enter Your Image URL" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddOffer;