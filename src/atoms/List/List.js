import React from "react";

import "./List.css";

const List = (props) => {
  const { list } = props;
  return (
    <ul className={`list-ul`}>
      {list.map((contents) => (
        <li className={`list-li`} key={contents}>
          {contents}
        </li>
      ))}
    </ul>
  );
};

export default List;
