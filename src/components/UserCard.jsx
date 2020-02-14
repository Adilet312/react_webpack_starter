import React from "react";
function UserCard()
{
  var userInfo =
  {


    margin: "20px 0px",
    border: "2px solid gray",
    height: "210px",
    marginTop: "10px"

  }
  var halfBlue =
  {
    backgroundColor: "#33AAFF",
    height: "110px"
  }
  var image =
  {
    width: "90px",
    marginTop: "-60px",
    border: "2px solid white",
    borderRadius: "50px",
    marginLeft: "16px"
  }
  var nameStyle =
  {
    color: "slategrey",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "arial",
    marginTop: "-20px",
    display: "inline-block",
    marginLeft: "18px"

  }
  var styleLinks =
  {

    marginTop: "11px"


  }
  var links =
  {
    color: "slategrey",
    fontSize: "18px",
    marginLeft: "20px",
    fontFamily: "Arial",
    marginTop: "-30px",

  }
  return (
    <div style = {userInfo}>
      <div style = {halfBlue}/>
        <img style = {image} src = "https://bluelti.com/wp-content/uploads/2018/06//group-1824145_640.png"></img>
        <div style = {nameStyle}>Kellie A. Corrigan</div>
        <div style = {styleLinks}>
          <a href="#" style = {links}>Tweets</a>
          <a href="#" style = {links}>Following</a>
          <a href="#" style = {links}>Followers</a>
        </div>
   </div>

  );
}
export default UserCard;
