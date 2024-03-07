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

const LinkedList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

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
    }
  };

  return (
    <div className="linked-list">
      <div className="controls">
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
    </div>
  );
};

export default LinkedList;
