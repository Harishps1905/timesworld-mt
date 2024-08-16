import React from "react";
import './country.css'

const Country = ({country}) => {
  return (
    <div className="country parent">
      <img className="flag " src={country.flag} alt={`${country.name} flag`} height="50" width="65" />
      <div className="child">
        <h3 className=" cntryname">{country.name}</h3>
        <p className=" region">{country.region}</p>
      </div>
    </div>
  );
};

export default Country;
