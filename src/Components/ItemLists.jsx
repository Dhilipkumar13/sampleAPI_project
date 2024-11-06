import React from "react";
import ItemBox from "./ItemBox";

export default function ItemLists({ items, handleShowDetails }) {
  // Check if items.users exists and is an array
  if (!items.users || !Array.isArray(items.users) || items.users.length === 0) {
    return <div>Loading...</div>; // Display this when no items match the search
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {items.users.map((item, index) => (
        <button
          style={{
            margin: "10px",
          }}
          onClick={(e) => {
            e.preventDefault();
            handleShowDetails(item);
          }}
        >
          <ItemBox key={index} item={item} />
        </button>
      ))}
    </div>
  );
}
