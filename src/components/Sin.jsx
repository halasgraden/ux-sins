import React from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Sin(props) {

    const [isOpen, setIsOpen] = React.useState(props.defaultOpen || false)

  return (
    <div className="sin-container">
        <div className="sin-header" onClick={() => setIsOpen(prev => !prev)}>
  <span className="sin-category">{props.category}</span>
  <h2>{props.name}</h2>
  <span className="sin-chevron">{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
</div>

    {isOpen && (<div className="full-sin">
      <p>{props.longDescription}</p>
      <p>{props.userThought}</p>
      <hr></hr>
      <p>
        <strong>Fix:</strong> {props.fix}
      </p>
      <p>
        <strong>Principle: </strong>
        <a href={props.reference}>{props.principle}</a>
      </p>
    </div>)}
    </div>
  );
}
