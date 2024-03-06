import React, { useState } from 'react';
import './LinkedList.css'; // Import your CSS file for styling

// Define a node component
const Node = ({ value, hasNext, hasPrevious }) => {
  return (
    <div className="node">
      {hasPrevious && <div className="arrow left">&#8592;</div>}
      <div className="value">{value}</div>
      {hasNext && <div className="arrow right">&#8594;</div>}
    </div>
  );
};




// Define the linked list component
const LinkedList = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const insertFirst = () => {
    if (!inputValue) return;
    const newList = [{ value: inputValue }, ...list];
    animateListChange(newList);
  };

  const insertLast = () => {
    if (!inputValue) return;
    const newList = [...list, { value: inputValue }];
    animateListChange(newList);
  };

  const deleteFirst = () => {
    if (list.length === 0) return;
    const newList = list.slice(1);
    animateListChange(newList);
  };

  const deleteLast = () => {
    if (list.length === 0) return;
    const newList = list.slice(0, -1);
    animateListChange(newList);
  };

  const animateListChange = (newList) => {
    // Add animation class
    document.querySelector('.node-container').classList.add('animate');

    // After animation, update the list
    setTimeout(() => {
      setList(newList);
      setInputValue('');
      // Remove animation class after transition
      document.querySelector('.node-container').classList.remove('animate');
    }, 500);
  };

  return (
    <div className="linked-list">
      <div className="controls">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a value"
        />
        <button onClick={insertFirst}>Insert First</button>
        <button onClick={insertLast}>Insert Last</button>
        <button onClick={deleteFirst}>Delete First</button>
        <button onClick={deleteLast}>Delete Last</button>
      </div>
      <div className="node-container">
        {list.map((node, index) => (
          <Node
            key={index}
            value={node.value}
            hasNext={index < list.length - 1}
          />
        ))}
      </div>
    </div>
  );
};



export default LinkedList;
