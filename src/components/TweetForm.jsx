import React from "react";

function TweetForm()
{
  var inputStyle =
  {

    padding: '10px',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'left',
    marginRight: '40px',
    fontSize: '18px',
    outline: 'none'
  }
  var buttonStyle =
  {

    padding: '10px',
    width: '9%',
    border: '2px solid LightBlue',
    borderRadius: '20px ',
    textAlign: 'center',
    fontSize: '18px',
    outline: 'none'
  }
  return(
    <div>
      <form>
        <input style ={inputStyle}
          type='text'
          id='title'
          placeholder='Title'/>
        <input style ={inputStyle}
          type='text'
          id='img'
          placeholder='Img'/>
        <textarea style ={inputStyle}
          id='description'
          placeholder='Describe about tweet.'/>
        <button style ={buttonStyle} type='submit'>Submit!</button>
      </form>
    </div>
  );
}
export default TweetForm;
