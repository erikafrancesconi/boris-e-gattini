import React, { FunctionComponent } from 'react';
import Gatto from './Gatto';
import Flexbox from './Flexbox';
import { randomid, shuffle } from '../utils';

type Tipigatti = {  imgtype: string, quotes: { id: number, personaggio: string, citazioni: string[] }[] };

const Gatti: FunctionComponent<Tipigatti>  = ({ imgtype, quotes }) => {
  // Leaving it here in case I need to test ErrorBoundary
  // if (true) {
  //   throw new Error('Mamma mia la monnezza che ho fatto...')
  // }
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