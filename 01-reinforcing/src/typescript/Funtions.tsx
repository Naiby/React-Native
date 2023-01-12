import React from 'react'

export const Funtions = () => {
    const add = ( a: number, b: number ):number => {
        return a + b;
    }
  return (
    <>
        <h4>Funtions</h4>
        <span>The result is: { add( 10, 5 ) }</span>
    </>
  )
}