import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  // Handle the case where data is not found
  const data = details.find((item) => item.id === idInt);

  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div className="w-4/5 mx-auto py-10 text-white">
      <div>
        <img className="size" src={data.imageUrl} alt="" />
      </div>
      <div className="text-4xl font-bold py-5">{data.title}</div>
      <div>
        <h1 className="text-lg">Description: {data.description}</h1>
      </div>
    </div>
  );
};

export default Details;
