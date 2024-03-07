<<<<<<< HEAD
// LinkedList.jsx
import React, { useState } from 'react';
import './LinkedList.css';

const Node = ({ value, next }) => {
  return (
    <div className="node">
      <div className="value">{value}</div>
      <div className="line"></div>
      <div className="address">{next !== null ? next : "NULL"}</div>
    </div>
  );
};

=======
import React, { useState } from "react";
import "./LinkedList.css";

>>>>>>> f424382b110de9b32020855a94f8e690324e5a78
const LinkedList = () => {
  const [list, setList] = useState([]);

<<<<<<< HEAD
  const insertFirst = () => {
    if (!inputValue) return;
    const newList = [{ value: inputValue, next: list.length > 0 ? 0 : null }, ...list];
    setList(newList);
    setInputValue('');
  };

  const insertLast = () => {
    if (!inputValue) return;
    const newList = [...list, { value: inputValue, next: null }];
    if (list.length > 0) {
      const updatedList = list.map((node, index) => {
        return {...node, next: index === list.length - 1 ? list.length : node.next};
      });
      setList(updatedList);
    }
    setList(newList);
    setInputValue('');
  };

  const deleteFirst = () => {
    if (list.length === 0) return;
    const newList = list.slice(1);
    setList(newList);
  };

  const deleteLast = () => {
    if (list.length === 0) return;
    const newList = list.slice(0, -1);
    setList(newList);
    if (list.length > 1) {
      const updatedList = newList.map((node, index) => {
        return {...node, next: index === newList.length - 1 ? null : node.next};
      });
      setList(updatedList);
=======
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
>>>>>>> f424382b110de9b32020855a94f8e690324e5a78
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
<<<<<<< HEAD
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
          className="input-field"
        />
        <button onClick={insertFirst} className="btn">Insert First</button>
        <button onClick={insertLast} className="btn">Insert Last</button>
        <button onClick={deleteFirst} className="btn">Delete First</button>
        <button onClick={deleteLast} className="btn">Delete Last</button>
      </div>
      <div className="node-container">
        {list.map((node, index) => (
          <Node
            key={index}
            value={node.value}
            next={node.next}
          />
        ))}
      </div>
=======
        <button onClick={() => insertFirst("First")}>Insert First</button>
        <button onClick={() => insertLast("Last")}>Insert Last</button>
        <button onClick={deleteFirst}>Delete First</button>
        <button onClick={deleteLast}>Delete Last</button>
      </div>
>>>>>>> f424382b110de9b32020855a94f8e690324e5a78
    </div>
  );
};

export default LinkedList;
