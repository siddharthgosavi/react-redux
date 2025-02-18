import React from "react";

const RowItem = ({ name, price, hover = true }) => {
  return (
    <div
      className={`${
        hover && "hover:bg-purple-500"
      } flex justify-between  p-2 rounded-md cursor-pointer`}
    >
      <p>{name}</p> <p>₹ {price}</p>
    </div>
  );
};

export default RowItem;
