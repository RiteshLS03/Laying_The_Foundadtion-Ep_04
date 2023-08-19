import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{style : { background:"red" ,  padding:"100px "}},"Hey There! I am h1")

const heading2 = React.createElement("h2", {style : {background: "blue" , padding:"100px"}} , "I am H2 ");

const headind3 = React.createElement("h3", {style : {background: "green" , padding:"100px"}}, "I am H3")

const container = React.createElement("div",{id:"container"},[heading,heading2,headind3])

// const root = ReactDOM.createRoot(document.getElementById("root"))

function test(){
    return(
        <>
        <h1 style={{background:"#FA8072", padding:"33vh"}}>I am H1</h1>
        <h2 style={{background:"purple", padding:"33vh"}}>I am H2</h2>
        <h3 style={{background:"pink", padding:"33vh"}}>I am H3</h3>
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"))

// as we can see there are both the React core code and JSX code. JSX is Readable , Maintanabe and Easy to Debug compared to the react core code.

root.render(test());