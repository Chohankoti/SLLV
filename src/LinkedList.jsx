import React, { useState } from "react";
import "./LinkedList.css";

const LinkedList = () => {
  const [list, setList] = useState([]);

  const insertFirst = (value) => {
    setList([{ value, id: Date.now() }, ...list]);
  };

  const insertLast = (value) => {
    setList([...list, { value, id: Date.now() }]);
  };

  const deleteFirst = () => {
    if (list.length > 0) {
      const newList = [...list];
      newList.shift();
      setList(newList);
    }
  };

  const deleteLast = () => {
    if (list.length > 0) {
      const newList = [...list];
      newList.pop();
      setList(newList);
    }
  };

  return (
    <div className="linked-list-container">
      <div className="linked-list">
        {list.map((node, index) => (
          <div className="node" key={node.id}>
            <div className="value">{node.value}</div>
            {index < list.length - 1 && <div className="arrow">➔</div>}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={() => insertFirst("First")}>Insert First</button>
        <button onClick={() => insertLast("Last")}>Insert Last</button>
        <button onClick={deleteFirst}>Delete First</button>
        <button onClick={deleteLast}>Delete Last</button>
      </div>
    </div>
  );
};

export default LinkedList;
