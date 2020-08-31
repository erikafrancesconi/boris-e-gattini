import React, { Component } from 'react';
import Gatti from './Gatti';
import Radio from './Radio';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgtype : ''
    };
  }

  onTypeChange = event => {
    this.setState({imgtype: event.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className='tc mv3'>Boris e Gattini</h1>
        </header>
        <Radio changeEv={this.onTypeChange} value={this.state.imgtype}/>
        <Gatti imgtype={this.state.imgtype}/>
        <footer className='tc f7'>
          <p>Citazioni di Boris di <a href="https://it.wikiquote.org/wiki/Pagina_principale">Wikiquote</a>, Gattini di <a href="https://cataas.com/">CATAAS</a></p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;