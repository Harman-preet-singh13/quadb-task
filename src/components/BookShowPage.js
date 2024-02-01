import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useShowDetails from "./ShowDetails";

export default function BookShowPage() {
  const { id } = useParams();
  const { showById } = useShowDetails(id);
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();

    const existingSeriesNames = JSON.parse(localStorage.getItem("series-names")) || [];

    existingSeriesNames.push(showById?.show?.name);


    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    localStorage.setItem("series-names", JSON.stringify(existingSeriesNames));

    alert("Sucessfully booked!!")
    navigate("/")
  }

  return (
    <>
      <Link to="/">
        <button className="w-full border text-left font-semibold pl-2 shadow-sm text-xl">
          {" "}
          Go back
        </button>
      </Link>

      <div className="max-w-[1024px] mx-auto">
        <div className="mx-2 mt-10 p-2 border rounded *:my-2">
          <form onSubmit={handleSubmit}>
            <img
              src={showById?.show?.image?.medium}
              alt={showById?.show?.name}
              className=" mx-auto"
            />
            <div className="mt-5 italic text-slate-700 flex gap-2">
              <p className="font-semibold">Series Name:</p>
              <p>{showById?.show?.name}</p>
            </div>

            <div className="mt-4 flex gap-2">
              <label className="font-semibold">Full Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="grow border-b outline-none"
                placeholder="Harmanpreet Singh"
              />
            </div>

            <div className="mt-4 flex gap-2">
              <label className="font-semibold">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="grow border-b outline-none"
                placeholder="harman@mail.com"
              />
            </div>

            <div className="text-center">
              <button 
                type="submit"
              className="mt-5 py-2 px-2 border rounded font-semibold border-yellow-500 hover:bg-yellow-400">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
