import React from "react";
import { Link, useParams } from "react-router-dom";
import useShowDetails from "./ShowDetails";

export default function ShowsPage() {

  const { id } = useParams();

  const {  showById} = useShowDetails(id);


  return (
    <>
      <Link to="/">
        <button className="w-full border text-left font-semibold pl-2 shadow-sm text-xl">
          {" "}
          Go back
        </button>
      </Link>

      <div className="max-w-[1024px] mx-auto">
        <div className="mx-2 mt-10 p-2 border text-center rounded *:my-2">
          <img
            src={showById?.show?.image?.original}
            alt={showById?.show?.name}
            className="w-[300px] mx-auto bg-slate-600"
          />

          <h3 className="text-2xl  font-semibold">{showById?.show?.name}</h3>

          <p>Language: {showById?.show?.language}</p>
          <ul className="flex justify-center gap-3">
            {showById?.show?.genres?.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>

          <p>{showById?.show?.premiered} - {showById?.show?.ended}</p>

          <p>Average Runtime: {showById?.show?.averageRuntime}min</p>

            
          <div dangerouslySetInnerHTML={{ __html: showById?.show?.summary }} />
            
              <a
              href={showById?.show?.url}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              >
                Watch Now!!
              </a>
            
        </div>
      </div>
    </>
  );
}
