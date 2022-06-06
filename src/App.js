import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Calculator () {
  
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);
   
   const display = (symbol) => {
     
     setExpression(prev => prev + symbol);
 
     if (expression(expression.length -1) == "=") {
       if (/[0-9.]/.test(symbol)) {
         setExpression(symbol);
       } else {
       setExpression(answer + symbol)
       }
   }
   };
   
  //I understand that this should be a function because of security concerns, but eval meets the needs for this project and I'm ready to move on
   const calculate = () => {
     setAnswer(eval(expression));
     setExpression(eval(expression));
   };
   
    function allClear () {
     setExpression("");
     setAnswer(0);
   }
   
   function clear () {
     setExpression((prev) => {
       console.log(prev);
       prev = prev + "";
       return prev
         .split("")
         .slice(0, prev.length - 1)
         .join("");
     });
     setAnswer(0);
   }
   
   return (
   <div className="container">
   <div className="grid">
     <div  id="display" className="dis">
       <input type="text" value={expression} placeholder="0" disabled></input>
       <div className="total">{answer}</div>  
     </div>
 
   <div onClick={allClear} className="pad-button AC red">AC</div>
     
   <div onClick={clear} id="clear" className="pad-button C red">C</div>
     
   <div onClick={() => display("/")} id="divide" className="pad-button div">/</div>
     
   <div onClick={() => display("*")} id="multiply" className="pad-button times">x</div>
     
   <div onClick={() => display("7")} id="seven" className="pad-button seven dark-gray">7</div>
     
   <div onClick={() => display("8")} id="eight" className="pad-button eight dark-gray">8</div>
     
   <div onClick={() => display("9")} id="nine" className="pad-button nine dark-gray">9</div>
     
   <div onClick={() => display("-")} id="subtract" className="pad-button minus">-</div>
     
   <div onClick={() => display("4")} id="four" className="pad-button four dark-gray">4</div>
     
   <div onClick={() => display("5")} id="five" className="pad-button five dark-gray">5</div>
     
   <div onClick={() => display("6")} id="six" className="pad-button six dark-gray">6</div>
     
   <div onClick={() => display("+")} id="add" className="pad-button plus">+</div>
     
   <div onClick={() => display("1")} id="one" className="pad-button one dark-gray">1</div>
     
   <div onClick={() => display("2")} id="two" className="pad-button two dark-gray">2</div>
     
   <div onClick={() => display("3")} id="three" className="pad-button three dark-gray">3</div>
     
   <div onClick={calculate} id="equals" className="pad-button equal blue">=</div>
     
   <div onClick={() => display("0")} id="zero" className="pad-button zero dark-gray">0</div>
     
   <div onClick={() => display(".")} id="decimal" className="pad-button dot dark-gray">.</div>
     </div>
     </div>
     );
 }

export default Calculator;
