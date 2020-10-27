import './App.css';
import React from 'react';
import axios from 'axios'
import QuoteSimpson from './components/QuoteSimpson';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      simpsonQuote: null
    };
    this.getApiData = this.getApiData.bind(this);
  }

  componentDidMount(){
    this.getApiData();
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
      {
        this.state.simpsonQuote
        ? <QuoteSimpson simpsonQuote={this.state.simpsonQuote}/>
        : <p> Loading </p>
    }
      <button type="button" onClick={this.getApiData}>New quote</button>

    </div>
  );
}
}

export default App;
