import React from 'react';

const Location = ({city}) => {// =  (props) => {
    
    //destructuring
    const {city} = props;
    console.log(props);

    //de arrays
    const myArray = ['a', 'b'];
    const {x,y} = myArray;
    console.log(x); //a
    console.log(y); //b

    //solo los parametros necesarios
    const source = {x: 2, y:3};
    const {x} = source;
    console.log(x); //2
    console.log(y); //undefined

    //valores por defecto
    const {x, y = 1} = {};
    console.log(x); //undefined
    console.log(y); //1

    //elision
    const [ , , x, y] = ['a', 'b', 'c','d'];
    console.log(x); //c
    console.log(y); //d

    //rest operator
    const [x, ...y] = ['a', 'b', 'c'];
    console.log(x); //a
    console.log(y); //['b','c']
    
    
    //debugger;
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
}

//(
//  <div><H1>BOLIVIA</H1></div>
//);

export default Location
    