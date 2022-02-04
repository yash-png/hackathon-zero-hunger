import React from 'react';
import {Link} from 'react-router-dom';
const Card = ({name}) => {
  // const {name,paypalID} = props.data;
  return (<div className='d-flex justify-content-center'>
  <div
  style={{
    background: "#16194F",
  }}
   className='w-75 h-0 border-light border p-2 m-1 rounded container'>

      <h4 className='text-light'>{name}</h4>
      <a href={`/organizations/${name}`} style={{background:"#F44E77"}}className='btn btn-sm px-4 pt-1 text-light'>Donate</a>
  </div>
  </div>);
};

export default Card;
