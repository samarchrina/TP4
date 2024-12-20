import React from "react";
function createImageBitmap({firstName , lastName , age , hair}){
    return(
    < div  calssName="container">
    <h2>
    {lastName} , {firstName}
        </h2>
        <p> Age: {age}</p>
        <p>Hair color:{hair}</p>
        </div>

);}
export default createImageBitmap;