import React from "react";
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Sin(props) {
  const [isOpen, setIsOpen] = React.useState(props.defaultOpen || false)

  return (
    <div className={`sin-container${isOpen ? " sin-open" : ""}`}>
      <div className="sin-header" onClick={() => setIsOpen(prev => !prev)}>
        <div className="sin-header-row">
          <span className="sin-category">{props.category}</span>
          <span className="sin-chevron">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </span>
        </div>
        <h2 className="sin-title">{props.name}</h2>
      </div>

      {isOpen && (
        <div className="sin-body">
          <div className="sin-body-content">
            <p className="sin-description">{props.longDescription}</p>
            <img className="sin-image" src={props.image} />
            <blockquote className="sin-thought">{props.userThought}</blockquote>
          </div>
          <hr className="sin-divider" />
          <div className="sin-meta">
            <div className="sin-meta-section">
              <p className="sin-label">Fix</p>
              <p className="sin-meta-text">{props.fix}</p>
            </div>
            <div className="sin-meta-section">
              <p className="sin-label">Principle</p>
              <a className="sin-principle-link" href={props.reference}>{props.principle}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
