import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:12
  });

  const inputIsValid= userInput.duration>=1;

  function handleChange(inputIdentifier,newValue){
      setUserInput(prevUserInput=>{
          return{
              ...prevUserInput,
              [inputIdentifier]:+newValue,
          };
      });
  }



  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than Zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
