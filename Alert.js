import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}> 
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>
  )
}
{/* this is used to give height to the alert box so that it will not overlap with other components */}
{/* alert is used to show the message in the alert box and alert-dismissible is used to close the alert box */}
{/* fade show is used to show the alert box with fade effect */}
{/* role is used for accessibility purpose */}
{/* strong is used to make the text bold */}
