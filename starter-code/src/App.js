import React, { Component } from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Nav from "./components/Nav";
// import axios from 'axios';


// class App extends Component {

//   constructor(){
//       super()
//       this.state = {
//           countries: []
//       }
//   }

//   componentDidMount() {
//       axios.get("http://countries.tech-savvy.tech/countries")
//       .then(response => {
//           this.setState({countries: response.data})
//       })
//   }

//   render() {
//       return (
//           <div className="App">
//             <Nav />
//             <h1>{this.state.countries.map(country => <h1>{country.name.common}</h1>)}</h1>
//           </div>
//       );
//   }
// }

// export default App;



function App() {
  return (
    <div className="app-container">
      <Nav />
      <Countries />
      <Route path="/details/:someId" component={CountryDetails} />
    </div>
  );
}

export default App;

 

