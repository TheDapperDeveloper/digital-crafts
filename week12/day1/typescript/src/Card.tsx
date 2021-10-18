import React, { FC } from "react";

interface Studentprops {
  data: {
    name: string;
  };
}

const Card: FC<Studentprops> = (props) => {
  return (
    <div>
      <h1>{props.data.name}</h1>
    </div>
  );
};

export default Card;
