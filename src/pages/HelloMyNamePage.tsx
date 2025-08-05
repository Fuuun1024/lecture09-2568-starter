import { use, useState } from "react";

export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const[result, setResult]= useState("Please insert your name");

  const nameInput = (event:any) => {
    setName(event.target.value);
  };

  const [greetOk, setGreetOk] = useState(false);
  const greetBtnOnclick = ()=>{
    if(name === "") {
      setResult("Please enter your name.");
      setGreetOk(false)
    }
    else{
      setResult(`Hello : ${name}`);
      setGreetOk(true)
    }
  };
  
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value={name}
      />
      <button className="btn btn-primary" onClick = {greetBtnOnclick}>Greet Me</button>
      {/* Result Text */}
      <p className = {greetOk ? "" : "text-danger"} >{result}</p>
    </div>
  );
}
