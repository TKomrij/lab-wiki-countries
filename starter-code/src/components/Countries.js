    
import React from 'react';
import "./Countries.css";
import {Link} from "react-router-dom";
import Countries from "../countries.json";

export default () => {
 
  return (
    <div className="projects-container">
      <h2>Countries</h2>

      
      {Countries.map((country, index) => {
      
        return (
        <div className="project-container" key= {index} >
            <Link to={`/details/${country.ccn3}`} >
                <div key={country.ccn3}>
                    <h3>
                    {country.flag.normalize()}
                    {country.name.official}
                    </h3>
        
                </div>
            </Link> 
        </div>
        )
      })}
    </div>
  )
}