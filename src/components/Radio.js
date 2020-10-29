import React from 'react';

const Radio = ({ changeEv, reloadEvent, value }) => {
  return (
    <div className="tc f5 black-70">
      <p className="dib mv0">Che tipo di gattini vuoi?</p>
      <fieldset className="dib bn pv1 h-14">
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
      <input 
        type="button" 
        value="Ricarica" 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ml3" 
        onClick={reloadEvent} 
      />
    </div>
  );
};

export default Radio;