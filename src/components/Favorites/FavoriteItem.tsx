import React from 'react';

import Card from '../UI/Card';
import './FavoriteItem.css';
interface Props {
  title: string;
  description: string;
  id: string;

}

const FavoriteItem: React.FC<Props> = props => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;
