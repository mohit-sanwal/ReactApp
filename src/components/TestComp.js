import React from 'react';
export default function TestComp() {
  return(
    <div>
        <p data-testid="para"> this is a paragraph</p>
        <h1 data-testid="head"> this is aheading </h1>
        <input label="inputlabel" value={4} />
    </div>
  ) 
}