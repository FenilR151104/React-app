import React, {useState} from 'react'
// useState is used as hooks in react
// all console.log part are only for knowledge

export default function TextForm(props) {
  const handleUPClick = ()=>{
    console.log("Uppercase was clicked"  + text);
    let newText = text.toUpperCase();
    setText(newText);
    // convert the text into uppercase
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLoClick = ()=>{
    console.log("Lowercase was clicked"  + text);
    let newText = text.toLowerCase();
    setText(newText);
    // convert the text into lowercase
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleclearClick = ()=>{
    let newText = '';
    setText(newText);
    // clear the text
    props.showAlert("Text Cleared", "success");
  }

  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value);
    // allow to add text inside textarea
  }

  const [text, setText] = useState('Enter text here');
//   text = "new Text"; // Wrong way to change the text
//   setText("new Text"); // Correct way to change the text
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        {/* {{}} inside the double carly bracke, object is defined in js*/}
        {/* value={text} used to get values from const [text, setText] adn onChange is required to write in textarea and mb-3, mx-2, my-3 all are used for spacing,padding and all */}
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
        {/* disable={text.length===0} used to disable the button when textbox is empty */}
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      {/* text.split(" ").filter((element)=>{return element.length!==0}).length means split the word with space and coiunt the number of words and space is not count as word by the use of filter function and text.legth is used for number of characters in text and \s+ is used for whitespace including more than one line or next line*/}
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      {/* 0.008 is time to read one word so to count the total  inutes to read the text is 0.008*text.split(" ").length is required */}
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview to here"}</p> 
      {/* this is used to show the previwe o the above text */}

    </div>
    </>
  )
}
