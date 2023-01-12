import React, { useState } from 'react'

export const Counter = () => {

    const [value, setValue] = useState(10);

    const accumulate = ( numero: number ) => {
        setValue( value + numero );
    }
    
    return (
        <>
            <h3>Contador: <small> {value} </small> </h3>

            <button
                className="btn btn-primary"
                onClick={() => accumulate(-1)}
            >
                -1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => accumulate(1)}
            >
                +1
            </button>
        </>
    )
}