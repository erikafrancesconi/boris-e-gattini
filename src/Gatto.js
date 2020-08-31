import React from 'react';

const Gatto = ({ imgtype, id, name, quote }) => {
  return (
    <React.Fragment>
      <article className="mw5 bg-near-white br3 pa4 mv3 mh3 ba b--black-10">
        <div className="tc">
          <img src={`https://cataas.com/cat${imgtype}?height=200&id=${id}`} alt="Gattino"/>
          {/*<img src='https://via.placeholder.com/150' alt="Gattino"/>*/}
          <h2 className="f4">{name}</h2>
          <hr className="mw3 bb bw1 b--black-10"></hr>
        </div>
        <p className="tc lh-copy measure f6 black-70">{quote}</p>
      </article>
    </React.Fragment>
  );
}
  
export default Gatto;