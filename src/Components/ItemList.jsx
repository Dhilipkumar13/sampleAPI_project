import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemBox from "./ItemBox";

export default function ItemList({ items, handleShowDetails }) {
  // console.log(items);
  if (!items.users || !Array.isArray(items.users) || items.users.length === 0) {
    return <h2>Empty...</h2>;
  }

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      {items.users.map((item, index) => (
        <ListGroup
          style={{
            margin: "5px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.preventDefault();
            handleShowDetails(item);
          }}
        >
          <ItemBox key={index} item={item} />
        </ListGroup>
      ))}
    </div>
  );
}
