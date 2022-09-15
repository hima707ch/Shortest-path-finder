import React from "react";
//import ReactDOM from "react-dom";
import Box from "./Box";

var status = 0;

var mat = new Array(16);
for (var i = 0; i < 16; i++) {
    mat[i] = new Array(16);
    for (var j = 0; j < 16; j++) {
        mat[i][j] = -1;
    }
}

var ide;

//Setting Color red green black of boxes
function click(id) {
    (status === 0) && (ide = id);
    (status === 0) && (document.getElementById(id).style.backgroundColor = "green");
    (status === 0) && (document.getElementById("status").innerHTML = "Select Ending Point");
    (status === 0) && (mat[id % 16][Math.floor(id / 16)] = -2);


    (status === 1) && (document.getElementById(id).style.backgroundColor = "red");
    (status === 1) && (document.getElementById("status").innerHTML = "Now Block Boxes");
    (status === 1) && (mat[id % 16][Math.floor(id / 16)] = -3);

    (status === 2) && (document.getElementById(id).style.backgroundColor = "black");
    //(status === 2) && (document.getElementById("status").innerHTML = "");
    (status === 2) && (mat[id % 16][Math.floor(id / 16)] = -4);

    if (status < 2) status += 1;
}

function path() {

    var a = ide % 16;
    var b = Math.floor(ide / 16);

    var arr = [];
    var x = 0;

    var prev;

    arr.push([a, b, -4]);


    //Backtracking Algo
    while (x < arr.length) {
        a = arr[x][0];
        b = arr[x][1];
        prev = arr[x][2];
        x += 1;

        if (a > 15 || a < 0 || b > 15 || b < 0) continue; // Outside
        if (mat[a][b] === -4) continue; // block
        if (mat[a][b] >= 0) continue;   // Visited
        if (mat[a][b] === -1 || mat[a][b] === -2) {    // entry
            mat[a][b] = prev;

            arr.push([a + 1, b, 16 * b + a]);
            arr.push([a - 1, b, 16 * b + a]);
            arr.push([a, b + 1, 16 * b + a]);
            arr.push([a, b - 1, 16 * b + a]);
        }
        if (mat[a][b] === -3) {
            x = arr.length + 10;
            console.log("Reached");

            while (prev != -4) {
                document.getElementById(prev).style.backgroundColor = "yellow";
                prev = mat[prev % 16][Math.floor(prev / 16)];
            }
            document.getElementById(ide).style.backgroundColor = "green";

        }
        // console.log(arr);
    }
}

function func(i) {
    return <Box
        key={i}
        id={i}
        click={click}
    />
}

function App() {
    let arr = [];

    for (var i = 0; i < 256; i++) {
        arr.push(i);
    }

    return <div>

        <center><h1 id="status">Select Starting Point</h1></center>
        <br></br>

        <div className="one">
            {arr.map(func)}
        </div>

        <br></br><br></br>

        <center><button onClick={path}>Find Path</button></center>

    </div>
}

export default App;