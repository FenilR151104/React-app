// creating a page which contains button for dark and light mode
import React, { useState } from 'react'

export default function About() {

  const [myStyle, setMyStyle] = useState(
    {
        color: 'black',
        backgroundColor: 'white',
    }  
  )
  // const [btnText, setBtnText] = useState("Enable Dark mode")
  
  //   const toggleStyle= ()=>{
  //       if(myStyle.color === 'black'){
  //           setMyStyle(
  //               {
  //                   color: 'white',
  //                   backgroundColor: 'black',
  //                   border: '1px solid white'
  //               }  
  //           )
  //           setBtnText("Enable Light mode")
  //       }
  //       else{
  //           setMyStyle(
  //               {
  //                   color: 'black',
  //                   backgroundColor: 'white'
  //               }
  //           )
  //           setBtnText("Enable Dark mode");
  //       }
  //   } this is working function for about us darkmode and lighmode button
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
  }
  
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>About Us</h1>
        {/* my is for spacing in y-axis, mx is for spacing in x-axis */}
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Anallyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or the reading time, it gives you everything about your text.    
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle}data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle}data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                </div>
                </div>
            </div>
        </div>
        {/*<div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div>*/} 
        // this darkmode button is for About us text only
        
    </div>
  )
}
