/* eslint-disable no-unused-vars */
import React from "react";
import UseFetch from "./UseFetch";

const FetchYogaData = () => {
  const data = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">
          Use Fetch Custom Hook for Yoga Data
        </h1>
        {data &&
          data.map((index) => (
            <>
              <li className="list_data">
                <h3>{index.name}</h3>
                <p>
                  <strong>Benefits:</strong>
                  {index.benefits}
                </p>
                <p>
                  <strong>Time Duration:</strong>
                  {index.time_duration}
                </p>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default FetchYogaData;
