import React from "react";
import "../App.css";

const ListTemplate = ({ renderList, listTitle, handleFunction }) => {
  return (
    <React.Fragment>
      <h1>{listTitle}</h1>
      <ul className="myList">
        {renderList.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
            <button id={item.id} onClick={() => handleFunction(item)}>
              {listTitle === "Recommendation List(s)" ? "Add" : "Remove"}
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListTemplate;
