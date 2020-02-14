import React from "react";
import ClassTweet from "./ClassTweet";

export default  function MiddleColumn()
{
  var middleColumn =
  {
    float: "left",
    marginLeft: "10px",
    positive: "relative",
    width: "40%",
    height: "565px",
    display: "inline-block",
    border: "2px solid grey"


  }
  var list = [
  {
    img:"https://comps.canstockphoto.com/user-icon-vector-illustration-clip-art-vector_csp53752766.jpg",
    title:"Lorem ipsum",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "

  },
  {
    img:"https://banner2.cleanpng.com/20180516/iow/kisspng-computer-icons-users-group-clip-art-5afbdcbbb29963.3191974715264554837316.jpg",
    title:"Lorem ipsum",
    description:"Lorem ipsum dolor sit amet, <hr/> Lorem ipsum"
  },
  {
     img:"https://library.kissclipart.com/20180831/ewq/kissclipart-fa-fa-users-clipart-user-workflow-921f86e04296eb4f.jpg",
     title:"Lorem ipsum",
     description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
  }
];
  return (
    <div style={middleColumn}>
      {list.map((tweet,id)=>
        <ClassTweet
          title = {tweet.title}
          img = {tweet.img}
          description = {tweet.description}
          key = {id}/>
      )}
    </div>
  );
}
