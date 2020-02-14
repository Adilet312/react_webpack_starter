import React from "react";
import AcceptOption from "./AcceptOption";

function LastColumn()
{
    var lastColumnStyle =
    {
      // margin: "-10px 0px",
      float: "left",
      width: "20%",
      height: "565px",
      marginLeft: "10px",
      display: "inline-block",
      border: "2px solid grey"
      // paddingTop: "-70px"
    }

    var secondlist = [
    {
      img:"https://comps.canstockphoto.com/user-icon-vector-illustration-clip-art-vector_csp53752766.jpg",
      name:"Lorem ipsum"
    },
    {
      img:"https://banner2.cleanpng.com/20180516/iow/kisspng-computer-icons-users-group-clip-art-5afbdcbbb29963.3191974715264554837316.jpg",
      name:"Lorem ipsum"
    },
    {
       img:"https://library.kissclipart.com/20180831/ewq/kissclipart-fa-fa-users-clipart-user-workflow-921f86e04296eb4f.jpg",
       name:"Lorem ipsum"
    }
    ];

    return (
      <div style = {lastColumnStyle}>
        <span>People you may know:</span>
        {secondlist.map((person,id)=>
          <AcceptOption
            name = {person.name}
            img = {person.img}
            key = {id}/>
        )}
      </div>

  );
}

export default LastColumn;
