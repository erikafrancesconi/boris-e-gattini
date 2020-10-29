import React, { useState, useEffect } from 'react';
import Gatti from '../components/Gatti';
import Radio from '../components/Radio';
import ErrorBoundary from '../components/ErrorBoundary'
import { randomid } from '../utils';
// import { quotes } from './quotes';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [imgtype, setImgType] = useState('');
  const [rid, setRid] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Using fetch for training purposes, not really useful
    fetch(`${window.location.href}quotes.json`)
      .then(response =>
        response.json()
      )
      .then(quotes => {
        setQuotes(quotes);
      })
      .catch(() => {
        setHasError(true);
      })
  }, []);
  // Il parametro vuoto vuol dire che deve essere fatto una volta sola (è come usare componentDidMount)
  // In generale è un array di variabili di stato che indica che l'effetto deve essere 
  // eseguito al cambio di quelle variabili (quindi se ad esempio volessi usare l'effetto
  // al cambio delle variabili rid e imgtype dovrei passare [rid, imgtype]

  const onTypeChange = event => {
    setImgType(event.target.value);
  }

  const onReload = () => {
    setRid(randomid(10));
  }

  if (hasError) {
    return (
      <p>Ops! Qualcosa non ha funzionato. Viva la merda!</p>
    )
  }
  if (!quotes.length) {
    return (
      <p>Sto caricando i gattini...</p>
    )
  }
  return (
    <React.Fragment>
      <header>
        <h1 className='tc mv3'>Boris e Gattini</h1>
      </header>
      <Radio changeEv={onTypeChange} reloadEvent={onReload} value={imgtype}/>
      <ErrorBoundary>
        <Gatti imgtype={imgtype} quotes={quotes} rid={rid} />
      </ErrorBoundary>
      <footer className='tc f7'>
        <p>Citazioni di Boris di <a href="https://it.wikiquote.org/wiki/Pagina_principale">Wikiquote</a>, Gattini di <a href="https://cataas.com/">CATAAS</a></p>
      </footer>
    </React.Fragment>
  );
}

export default App;