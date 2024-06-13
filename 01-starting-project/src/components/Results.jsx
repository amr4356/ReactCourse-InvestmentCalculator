import {calculateInvestmentResults} from '../util/investment.js';

export default function Restults({input}){
    const resultsData=calculateInvestmentResults(input);
    console.log(resultsData);
    return (
        <p>Results coming soon</p>
    );
}