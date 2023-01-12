import React from 'react'

/*type, class, interface 
    the class serves to create instances and if it has a representation in the JavaScript part,
    type and interface, there is no synonym in JavaScript, 
*/

//interface's used for TS to know the structure of an object
interface Person {
    fullNNname: string;
    age: number;
    address: Addres
    // address: { 
    //Usually, an object is not created within an interface.
    //     pays: string;
    //     nrHouse: number;
    // }
}

interface Addres {
    pays: string;
    nrHouse: number;
}
export const LiteralObject = () => {
    const person: Person = {
        fullNNname: 'Fernando',
        age: 35,
        address: {
            pays: 'Canadá',
            nrHouse: 615
        }
    }    
    return (
        <>
            <h4>Literal Objects</h4>
            <code>
                <pre>
                    {JSON.stringify(person, null, 2)}
                </pre>
            </code>
        </>
    )
}