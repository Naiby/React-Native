import React, { useState } from 'react'

export const useCounter = (inicial: number = 10) => {
    const [value, setValue] = useState(inicial);

    const accumulate = ( numero: number ) => {
        setValue( value + numero );
    }
    return{
        value,
        accumulate

    }
}