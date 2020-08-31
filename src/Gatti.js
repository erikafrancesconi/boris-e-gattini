import React from 'react';
import Gatto from './Gatto';
import { quotes } from './quotes';
import { randomid, shuffle } from './utils';

const Gatti = () => {
  let gattile = quotes.map(obj => {
    const { id, personaggio, citazioni } = obj;
    const idcit = Math.floor(Math.random()*citazioni.length);
    const cit = citazioni[idcit];
    return <Gatto key={id+'-'+idcit} name={personaggio} quote={cit} id={randomid(10)} />
  });
  gattile = shuffle(gattile);
  gattile = gattile.filter((el, idx) => {
    return idx < 4;
  });

  return (
      <div className='flex flex-wrap justify-center'>
        {gattile}
      </div>
  );
};

export default Gatti;