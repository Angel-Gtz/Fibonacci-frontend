import React from 'react'

const NormalCalculator = ({result,  number, setNumber, getResponse, reset}) => {

    const getValue = (val) => {
        console.log(val.target.value)
    }

    return (
        <div className="NormalCalculator-main-container">
            <div className="NormalCalculator-title-container">
                <h1>
                    Calculate Fibonacci!
                </h1>
            </div>
            <div className="NormalCalculator-calculator-container">
                <input className="NormalCalculator-caculator-input" type='number'  id="NormalCalculator" name="calculator" onChange={({target}) => setNumber(target.value)} value={number}/>
                <button className="NormalCalculator-calculator-button" onClick={getResponse}>Calculate</button>
            </div>
            <div className="NormalCalculator-reset-button-container">
                <button className="NormalCalculator-reset-button" onClick={reset}>Reset</button>
            </div>
            <div className="NormalCalculator-result-container">
                <h4 className="NormalCalculator-result-text">Fibonacci Result:   <b>{result}</b></h4>
            </div>
        </div>
    )
}

export default NormalCalculator
