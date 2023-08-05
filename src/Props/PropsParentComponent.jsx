import React from 'react';
import PropsAsString from "./PropsAsString";
import PropsAsNum from './PropsAsNum';
import PropsAsUndefined from "./PropsAsUndefined";
import PropsAsNull from "./PropsAsNull";
import PropsAsBoolean from "./PropsAsBoolean";
import PropsAsFunction from './PropsAsFunction';

let name = "Tabassum";
let num = 7618123442;
let ud=undefined;
let nl= null;
let bool = true;
let fun = () => {
    return "This is my function";
}

const PropsParentComponent = () => {
  return (
    <div>
        <PropsAsString str={name} str1="Yunus"/>
        <PropsAsNum no={num} no1={8675}/>
        <PropsAsUndefined undef={ud}/>
        <PropsAsNull mynull={nl}/>
        <PropsAsBoolean mybool={bool}/>
        <PropsAsFunction myfun={fun} myfun1={function(){return "I m regular function"}}/>
    </div>
  )
}

export default PropsParentComponent