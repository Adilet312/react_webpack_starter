import React from 'react';
import PropTypes from "prop-types";

function AcceptOption(props){

  var styling =
 {
     //   display: "block",
     border: "2px solid #C3C5C7",
     padding: "10px",
     paddingBottom: "30px"
 }

  var imgStyling =
  {
      width: "45px",
      padding: "10px",
      float: "left"
  }

  var buttonStyling =
  {
    padding: "10px",
    width: "30%",
    borderRadius: "20px",
    border: "2px solid LightBlue",
    marginLeft: "20px"
  }

  return (
    <div style ={styling}>
      <img style= {imgStyling} src= {props.img}/>
      <span>{props.name}</span>
      <br/>
      <button style = {buttonStyling}>Add</button>
      <br/>
    </div>
  );
}

AcceptOption.propTypes= {
  img : PropTypes.string,
  name: PropTypes.string
};

export default AcceptOption;
