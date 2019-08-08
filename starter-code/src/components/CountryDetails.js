import React from 'react';
import { Link } from 'react-router-dom';
import "./CountryDetails.css";
import Countries from '../countries.json'

function CountryDetails (props) {

  
  const ccn3 = props.match.params.someId
  const getCountry = (ccn3) => {
    debugger
    console.log('ccn3', ccn3)
  }
//     const getCountry = (ccn3) => {
// console.log(Countries)
//       debugger

//       let found = Countries.find(oneCountry => {
//         return oneCountry.ccn3 === ccn3;
//       })

//       return found;

//     };
  
  const { params } = props.match;
  const foundCountry = getCountry(params.ccn3);

  return (
    <div className="project-details-container">
      <div>
        {/* <h2>{ foundCountry.flag }</h2> */}
        <Link to='/'>Back</Link>
      </div>
    </div>
  )
}

export default CountryDetails;