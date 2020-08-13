import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ListItems.sass";
import FlipMove from "react-flip-move";

const ListItems = (props) => {
  const items = props.items;

  const itemsToIterate = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            onChange={(e) => props.updateItem(e.target.value, item.key)}
            type="text"
            id={item.key}
            value={item.text}
          ></input>
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {itemsToIterate}
      </FlipMove>
    </div>
  );
};

export default ListItems;
