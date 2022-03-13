import React from 'react'

const ClassicCalculator = ({result,  number, setNumber, getResponse, reset}) => {


    return (

        // CALCULATOR SCREEN CONTAINER:

        <div className="classicCalculator-main-container">
            <div className="classicCalculator-screen-container">
                { result &&
                    <div className="classicCalculator-screen-left-inner-container">
                        <p className="classicCalculator-screen-text">Result:</p>
                        <p className="classicCalculator-screen-result">{result}</p>
                    </div>
                }
                { !result &&
                    <p className="classicCalculator-screen-number">{number}</p>
                }
            </div>

            {/* // CALCULATOR KEYS CONTAINER:  */}

            <div className="classicCalculator-keys-container">
                <div className="classicCalculator-numbers-container">

                    {
                        new Array(9).fill(0).map((val, index) => {
                            return (
                                <div className="classicCalculator-number-key" key={index} onClick={() => setNumber(number + `${index + 1}`)}>
                                    <p>{index + 1}</p>
                                 </div>
                            )
                        })
                    }
                    
                    <div className="classicCalculator-number-cero" onClick={() => setNumber(number + `${0}`)}>
                        <p>0</p>
                    </div>
                </div>
                <div className="classicCalculator-operation-keys-container">
                    <div className="classicCalculator-reset-button" onClick={reset}>
                        <p>CE</p>
                    </div>
                    <div className="classicCalculator-calculate-button" onClick={getResponse}>
                        <p>=</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassicCalculator
