/* eslint-disable no-unused-vars */
import React from "react";
import UseFetch from "./UseFetch";
import "./FetchData.css";

const FetchData = () => {
  const data = UseFetch("https://api.npoint.io/9045c260b1565daa9e15");
  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Use Fetch Custom Hook</h1>
        {data &&
          data.map((index) => (
            <>
              <li className="list_data">
                <h3>{index.name}</h3>
                <p>
                  <strong>Importance: </strong>
                  {index.importance}
                </p>
                <p>
                  <strong>Benefits: </strong>
                  {index.benefits}
                </p>
                <p>
                  <strong>Time to eat: </strong>
                  {index.best_time_to_intake}
                </p>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default FetchData;
