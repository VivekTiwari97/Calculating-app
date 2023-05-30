import React,{useState} from "react";
import './App.css';

function App() {
  const[count, setCount]=useState("")
  const clickHandler=(event)=>{
    setCount(count.concat(event.target.value))
  }

  const clearDisply=()=>{
    setCount("")
  }

  const calculate=()=>{
    setCount(eval(count).toString());
  }
  return (
    <div className="calc">
     <input type="text" placeholder="0" id="answar" value={count}/>
     <input type="button" value="9" className="button" onClick={clickHandler}/>
     <input type="button" value="8" className="button"onClick={clickHandler}/>
     <input type="button" value="7" className="button"onClick={clickHandler}/>
     <input type="button" value="6" className="button"onClick={clickHandler}/>
     <input type="button" value="5" className="button"onClick={clickHandler}/>
     <input type="button" value="4" className="button"onClick={clickHandler}/>
     <input type="button" value="3" className="button"onClick={clickHandler}/>
     <input type="button" value="2" className="button"onClick={clickHandler}/>
     <input type="button" value="1" className="button"onClick={clickHandler}/>
     <input type="button" value="0" className="button"onClick={clickHandler}/>
     <input type="button" value="."className="button" onClick={clickHandler}/>
     <input type="button" value="+" className="button"onClick={clickHandler}/>
     <input type="button" value="-" className="button"onClick={clickHandler}/>
     <input type="button" value="*" className="button"onClick={clickHandler}/>
     <input type="button" value="/" className="button"onClick={clickHandler}/>
     <input type="button" value="%" className="button"onClick={clickHandler}/>
     <input type="button" value="Clear" className="button button1" onClick={clearDisply}/>
     <input type="button" value="=" className="button button1" onClick={calculate}/>
    </div>
  );
}

export default App;
