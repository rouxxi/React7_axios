import './App.css';
import React from 'react';
import axios from 'axios'
import QuoteSimpson from './components/QuoteSimpson';

const sampleQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left"
};

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      simpsonQuote: sampleQuote
    };
    this.getApiData = this.getApiData.bind(this);
  }
  getApiData() {
   axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => {
      console.log(response)
      this.setState({ simpsonQuote : response.data[0]}
      ); }        
    )}
render() {

  return (
    <div className="App">
      <QuoteSimpson simpsonQuote={this.state.simpsonQuote}/>
      <button type="button" onClick={this.getApiData}>New quote</button>

    </div>
  );
}
}

export default App;
