import React from "react";
import ItemBox from "./ItemBox";

export default function ItemLists({ items }) {
  console.log(items.users);

  // Check if items array is empty
  if (!items || items.length === 0) {
    return <p>Loading...</p>; // You can display a loading message or spinner here
  }

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {items.users.map((item, index) => (
        <ItemBox item={item} key={index} />
      ))}
    </div>
  );
}
