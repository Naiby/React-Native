import React from 'react'

export const BasicType = () => {

/* if I want to make the type explicit and not prevent TypeScript from inferring it, 
then you put a colon followed by the data (in this case String)
*/
    // let name:string = 'Naiby';
/*if I need it to change data, I can place it with the pipe character followed by the other data */
    // let name:string | number = 'Naiby';
    // name=123;
//
    const name: string = 'Naiby'; //now defined as a constannte
    const age: number = 27; 
    const isActive:boolean = false;
/* If the array is based it remains as implicit type any */
    // const powers= []; // 'Speed', 'Flying', 'Breathing in water'.
    // powers.push[1]; 
    // powers.push['fdgfg']; 
    // powers.push[false]; //This way, it does not integrate correctly
    const powers: (string|number)[] = []; 
    
  return (
    <>
      <h4>Basic Type</h4>
            { name }, { age }, { (isActive) ? 'active' : 'not active' }
            <br/>
            { powers.join(', ') }
    </>
  )
}