// LinkedList.jsx
import React, { useState } from 'react';
import './LinkedList.css';

const Node = ({ value, next }) => {
  const address = next !== null ? next : "X";

  return (
    <div className="node">
      <div className="value">{value}</div>
      <div className="line"></div>
      <div className="address">{address}</div>
    </div>
  );
};

const Arrow = () => {
  return <div className="arrow">&#8594;</div>;
};

const LinkedList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const insertFirst = () => {
    if (!inputValue) return;
    const newList = [{ value: inputValue, next: list.length > 0 ? list[0].value : null }, ...list];
    setList(newList);
    setInputValue('');
  };

  const insertLast = () => {
    if (!inputValue) return;
    const newList = [...list, { value: inputValue, next: null }];
    if (list.length > 0) {
      list[list.length - 1].next = inputValue;
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
          <React.Fragment key={index}>
            <Node value={node.value} next={node.next} />
            {index !== list.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LinkedList;
