import React from "react";

export default function ItemBox({ item }) {
  // console.log(item + "****?*");
  return (
    <div
      className="bg-primary"
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        marginBottom: "10px",
        width: "400px",
        margin: "5px",
        borderRadius: "10px",
      }}
    >
      <h3>
        {item.id}.{item.firstName} {item.lastName}
      </h3>
      <p>Email: {item.email}</p>
      <p>Age: {item.age}</p>
    </div>
  );
}
