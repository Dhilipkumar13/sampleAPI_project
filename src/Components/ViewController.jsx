import React from "react";
import ItemLists from "./ItemLists";

export default function ViewController(items, handleShowDetails) {
  return (
    <React.StrictMode>
      <ItemLists items={items} handleShowDetails={handleShowDetails} />
    </React.StrictMode>
  );
}
