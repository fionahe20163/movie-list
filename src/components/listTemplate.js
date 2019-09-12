import React from 'react'
import '../App.css';

const ListTemplate = props => {
  return (
    <React.Fragment>
      <h1>{props.listTitle}</h1>
      <ul className='myList'>
        {props.renderList.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.img} alt={item.title} />
            <button id={item.id} onClick={() => props.handleFunction(item)}>
              {props.listTitle === "Recommendations" ? "Add" : "Remove"}
            </button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListTemplate;
