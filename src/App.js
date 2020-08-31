import React from 'react';
import Gatti from './Gatti';

const App = () => {
  return (
    <React.Fragment>
      <header>
        <h1 className='tc'>Boris e Gattini</h1>
      </header>
      <Gatti />
      <footer className='tc f7'>
        <p>Citazioni di Boris di <a href="https://it.wikiquote.org/wiki/Pagina_principale">Wikiquote</a>, Gattini di <a href="https://cataas.com/">CATAAS</a></p>
      </footer>
    </React.Fragment>
  );
}

export default App;