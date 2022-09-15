import React from "react";
import ReactDOM from "react-dom";

function Status(props){
    var status = 0;
    return <div >
        {status==0 && <p>Select Starting point</p>}
    </div>
}
export default Status;