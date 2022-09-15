import React from "react";
//import ReactDOM from "react-dom";

function Box(props){

    function click(){
        props.click(props.id);
    }

    return <div className="two" id={props.id} onClick = {click}></div>
}
export default Box;