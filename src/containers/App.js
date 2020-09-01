import React, { Component } from 'react';
import Gatti from '../components/Gatti';
import Radio from '../components/Radio';
import { randomid } from '../utils';
// import { quotes } from './quotes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes : [],
      imgtype : '',
      rid : ''
    };
  }

  componentDidMount() {
    // Using fetch for training purposes, not really useful
    fetch(`${window.location.href}quotes.json`)
      .then(response =>
        response.json()
      )
      .then(quotes => {
        this.setState({quotes: quotes})
      })
  }

  onTypeChange = event => {
    this.setState({imgtype: event.target.value});
  }

  onReload = event => {
    this.setState({rid: randomid(10)});
  }

  render() {
    if (this.state.quotes.length === 0) {
      return (
        <p>Sto caricando i gattini...</p>
      )
    }
    return (
      <React.Fragment>
        <header>
          <h1 className='tc mv3'>Boris e Gattini</h1>
        </header>
        <Radio changeEv={this.onTypeChange} reloadEvent={this.onReload} value={this.state.imgtype}/>
        <Gatti imgtype={this.state.imgtype} quotes={this.state.quotes} />
        <footer className='tc f7'>
          <p>Citazioni di Boris di <a href="https://it.wikiquote.org/wiki/Pagina_principale">Wikiquote</a>, Gattini di <a href="https://cataas.com/">CATAAS</a></p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;