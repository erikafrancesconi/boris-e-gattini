import React from 'react';
import Gatto from './Gatto';
import Flexbox from './Flexbox';
import { randomid, shuffle } from '../utils';

const Gatti = ({ imgtype, quotes }) => {
  let gattile = quotes.map(obj => {
    const { id, personaggio, citazioni } = obj;
    const idcit = Math.floor(Math.random()*citazioni.length);
    const cit = citazioni[idcit];
    return <Gatto 
      imgtype={imgtype} 
      key={id+'-'+idcit} 
      name={personaggio} 
      quote={cit} id={randomid(10)} 
    />
  });
  gattile = shuffle(gattile);
  gattile = gattile.filter((el, idx) => {
    return idx < 4;
  });

  return (
      <Flexbox>
        {gattile}
      </Flexbox>
  );
};

export default Gatti;