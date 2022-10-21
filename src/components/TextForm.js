import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase.", "success");
    }
    
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase.", "success");
    }
    
    const handleClrClick = ()=>{
        setText("");
        props.showAlert("Cleared Text!.", "success");
    }
    
    const handleCopyClick = ()=>{
        var textarea = document.getElementById("myBox");
        textarea.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!.", "success");
    }
    
    const handleRemoveSpace = ()=>{
        let newText = text.split(/ [ ]+ /); //split more than 1 space
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed.", "success");
    }

    const onTextChange = (event)=>{
        // console.log("TEXT IS UPDATED");
        setText(event.target.value);
    }

    const [text, setText] = useState("");  //useState variable text and update function setText 
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //Right way to change the state

    const preview = {
        border : '5px solid grey',
        padding : '15px 26px'
    }

    return (
    <>
        <div className="container mt-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="9" value={text} onChange={onTextChange} style={{backgroundColor: props.mode === 'dark'? 'rgb(58 58 63)':'#fff', color: props.mode === 'dark'? '#fff':'rgb(58 58 63)'}}></textarea>
        </div>
        <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>
            Conver to UpperCase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>
            Covert to LowerCase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleClrClick}>
            Clear Text
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleCopyClick}>
            Copy Text
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={handleRemoveSpace}>
            Remove Extra Space
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} Characters.</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <p>Preview</p>
        <p style={preview}>{text.length > 0 ? text : "Enter text in above box to preview here.."}</p>
      </div>
    </>
  )
}
