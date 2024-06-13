import { useState } from "react";

export default function UserInput(){
    //we can use four different states with four handling functions for handling states or just one state with one function for all of them
    // const [initialInvestment,setInitialInvestment]=useState('');
    // const [annualInvestment,setAnnualInvestment]=useState('');
    // const [expectedReturn,setExpectedReturn]=useState('');
    // const [duration,setDuration]=useState('');

    // function handleInitialInvestment(event){
    //     setInitialInvestment(event.target.value);
    // }
    // function handleAnnualInvestment(event){
    //     setAnnualInvestment(event.target.value);
    // }
    // function handeExpectedReturn(event){
    //     setExpectedReturn(event.target.value);
    // }
    // function handleDuration(event){
    //     setDuration(event.target.value);
    // }
    const [userInput,setUserInput]=useState({
        initialInvestment:1000,
        annualInvestment:1200,
        expectedReturn:6,
        duration:12
    });
    function handleChange(inputIdentifier,newValue){
        setUserInput(prevUserInput=>{
            return{
                ...prevUserInput,
                [inputIdentifier]:newValue,
            };
        });
    }



    return (
        <section id='user-input'>
           <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event)=>handleChange('initialInvestment',event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} required onChange={(event)=>handleChange('annualInvestment',event.target.value)} />
                </p>
           </div>
           <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event)=>handleChange('expectedReturn',event.target.value)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event)=>handleChange('duration',event.target.value)} />
                </p>
           </div>
        </section>
    );
}