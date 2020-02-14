import React from "react";
import { Link } from 'react-router-dom';
function Navbar()
{
  var navContainer =
  {
    padding: '40px',
    marginBottom: '15px',
    border: '2px',
    backgroundColor: '#ecf0f1'
  };
  var listLinks =
  {
    float: 'left',
    fontSize: '20px',
    border: '2px solid gray',
    color: 'gray',
    padding: '8px',
    margin:'0px -1px'
  }
  var inputSearch =
  {
    float: 'right',
    padding: '10px',
    width: '20%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px',
    outline: 'none'
  }
  var inputTweet =
  {
    float: 'right',
    padding: '10px',
    width: '9%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    outline: 'none'
  }
  return (
     <div style={navContainer}>
     <Link to="/" style = {listLinks}>Home</Link>
     <Link to="/" style = {listLinks}>About</Link>
     <Link to="/pathToForm" style = {listLinks}>Create tweet account</Link>
     <button id='tweedId' style={inputTweet}>Tweet</button>
     <input type='text' id='searchId' style={inputSearch} placeholder='Search'/>
     <br/>
    </div>


  );
}
export default Navbar;
