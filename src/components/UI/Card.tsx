import React, { CSSProperties } from 'react';

import './Card.css';
interface Props {

  style: CSSProperties;
}

const Card: React.FC<Props> = props => {
  return <div className="card" style={props.style}>{props.children}</div>;
};

export default Card;
