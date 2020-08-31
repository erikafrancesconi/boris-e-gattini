import React from 'react';

const Radio = ({ changeEv, value }) => {
  return (
    <div className="tc f5 black-70">
      <p className="dib mv0">Che tipo di gattini vuoi?</p>
      <fieldset className="dib bn pv1">
        <input 
          type="radio" 
          name="tipoimg" 
          value="" 
          id="tipoimg1" 
          className="mr1" 
          onChange={changeEv} 
          checked={value === ""}
        />
        <label htmlFor="tipoimg1" className="mr2 lh-copy pointer">Immagini</label>
        <input 
          type="radio" 
          name="tipoimg" 
          value="/gif" 
          id="tipoimg2" 
          className="mr1" 
          onChange={changeEv} 
          checked={value === "/gif"}
        />
        <label htmlFor="tipoimg2" className="lh-copy pointer">GIF</label>
      </fieldset>
    </div>
  );
};

export default Radio;