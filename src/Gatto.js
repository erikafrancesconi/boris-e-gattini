import React from 'react';
import './Gatto.css';

const Gatto = ({ id, name, quote }) => {
  return (
    <div className="gatto bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://cataas.com/cat?width=200&id=${id}`} alt="Gattino"/>
      <h2>{name}</h2>
      <p>{quote}</p>
    </div>
  );
}

export default Gatto;