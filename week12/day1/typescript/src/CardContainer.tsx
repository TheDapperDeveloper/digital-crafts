import React from "react";
import Card from "./Card";

const data = [
  { name: "Jose" },
  { name: "Britt" },
  { name: "Matt" },
  { name: "Dustin" },
  { name: "Justin" },
  { name: "Kayla" },
  { name: "Deanna" },
  { name: "Cameron" },
  { name: "Tim" },
  { name: "Ron" },
  { name: "Jamie" },
  { name: "Brande" },
  { name: "Jordan" },
  { name: "Xavier" },
];

function cardContainer() {
  return (
    <div>
      {data.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
}

export default cardContainer;
