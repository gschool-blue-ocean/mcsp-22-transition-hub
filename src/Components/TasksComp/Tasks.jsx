import React, { useState } from 'react';
import './tasks.css';

const Tasks = ({ title, dueDate, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>
        <span>{dueDate}</span>
        <span className="accordion-toggle">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Tasks;
