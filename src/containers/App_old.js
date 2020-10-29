// Old version without Hooks, leaving it here for learning purposes

import React, { Component } from 'react';
import Gatti from '../components/Gatti';
import Radio from '../components/Radio';
import ErrorBoundary from '../components/ErrorBoundary'
import { randomid } from '../utils';
// import { quotes } from './quotes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes : [],
      imgtype : '',
      rid : '',
      hasError : false
    };
  }

  componentDidMount() {
    // Using fetch for training purposes, not really useful
    fetch(`${window.location.href}quotes.json`)
      .then(response =>
        response.json()
      )
      .then(quotes => {
        this.setState({quotes: quotes});
      })
      .catch(error => {
        this.setState({hasError: true});
      })
  }

  onTypeChange = event => {
    this.setState({imgtype: event.target.value});
  }

  onReload = event => {
    this.setState({rid: randomid(10)});
  }

  render() {
    const { hasError, quotes, imgtype } = this.state;
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
        <Radio changeEv={this.onTypeChange} reloadEvent={this.onReload} value={imgtype}/>
        <ErrorBoundary>
          <Gatti imgtype={imgtype} quotes={quotes} />
        </ErrorBoundary>
        <footer className='tc f7'>
          <p>Citazioni di Boris di <a href="https://it.wikiquote.org/wiki/Pagina_principale">Wikiquote</a>, Gattini di <a href="https://cataas.com/">CATAAS</a></p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;