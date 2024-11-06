import React from "react";
import ItemColumn from "./ItemColumn";

export default function ViewController(items, handleShowDetails) {
  return (
    <div>
      <ItemColumn items={items} handleShowDetails={handleShowDetails} />
    </div>
  );
}
