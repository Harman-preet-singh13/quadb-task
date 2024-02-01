import React, { useState, useEffect } from "react";
import { searchShows } from "../api";
import { Link } from "react-router-dom";

export default function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchShows("all");
        setShows(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-[1024px] mx-auto font-mono">
      <div className="mx-2 my-5">
        <div className="flex justify-between">
          <h1 className="text-4xl flex justify-center grow">TV Shows</h1>
          <Link
          to="/BookedShow"
          className="self-center text-lg font-semibold hover:text-yellow-500"
          >
            BookedShow
          </Link>
        </div>

        <ul>
          {shows.map((show) => (
            <li key={show.show.id}>
              <div className="max-w-[1000px] mx-auto">
                <div className="flex justify-between border rounded my-2">
                  <div className="flex gap-2">
                    <Link to={`/shows/${show.show.id}`} className="">
                      <img
                        src={show.show?.image?.medium}
                        className="w-32 bg-slate-600"
                        alt={show.show.name}
                        loading="lazy"
                      />
                    </Link>

                    <div>
                      <Link
                        to={`/shows/${show.show.id}`}
                        className="hover:text-yellow-500"
                      >
                        {" "}
                        <h3 className="text-2xl">{show.show.name}</h3>
                      </Link>

                      <div className="text-slate-500 mt-5 flex gap-2">
                        <p>{show.show.premiered}</p>
                        <p>{show.show.runtime}min</p>
                      </div>
                      <p>Rating-{show.show?.rating?.average}</p>
                      <Link to={`/shows/${show.show.id}`}>
                        {" "}
                        <button className="mt-2 px-2 py-2 border rounded hover:border-yellow-500 hover:text-yellow-500">
                          View{" >"}
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Link
                    to={`/BookShow/${show.show.id}`}
                    className="self-center"
                  >
                    <button className=" hover:cursor-pointer hover:text-blue-500">
                      Book Ticket{" >"}
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
