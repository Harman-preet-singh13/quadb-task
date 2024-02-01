import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookedShow() {

    const [seriesNames, setSeriesNames] = useState([]);

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  
  useEffect(() => {
    // Retrieve series names from local storage
    const storedSeriesNames = JSON.parse(localStorage.getItem('series-names')) || [];
    setSeriesNames(storedSeriesNames);
  }, []);

  return (
    <>
      <Link to="/">
        <button className="w-full border text-left font-semibold pl-2 shadow-sm text-xl">
          {" "}
          Go back
        </button>
      </Link>

      <div className="max-w-[1024px] mx-auto">
        <h1 className="mt-5 mx-2 text-2xl">
          User- <span className="">{username}</span>
        </h1>

        <h1 className="mt-5 mx-2 text-2xl">
          Email- <span className="">{email}</span>
        </h1>
        <div className="mx-2 mt-10 p-2 border rounded *:my-2">
            <ul>
            {seriesNames.map((series, index)=>(
                <li key={index} className="border-b my-5">
                    {series}
                </li>
            ))} 
            </ul>
        </div>
      </div>
    </>
  );
}
