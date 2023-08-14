import React from 'react'
import { useState, useMemo, useCallback, useEffect } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';


function ParentComponent() {
    console.log('parent component- rendering');
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(500000);

    const incrementAge = () => {
        setAge(age + 1);
    } 

    const incrementSalary = () => {
        setSalary(salary + 100000)
    }

    console.log('incrementAge', incrementAge);
   
    return (
        <>
          <Title />
          <Count text={'age'} value={age}/>
          <Button handleClick={incrementAge} > increment age </Button>
          <Count text={'salary'} value={salary}/>
          <Button handleClick={incrementSalary}> increment salary </Button>
        </>
    )

}


export default React.memo(ParentComponent);
