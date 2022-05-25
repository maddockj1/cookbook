import React from 'react';
export default function Header() {
  const style = {
    border: '2px solid #000',
    color: '#32292F',
    backgroundColor: '#A7CCED',
    fontFamily: 'Monaco',
  }
  return (<div>
    <nav style={style}>
      <h1>Cookbook</h1>


    </nav>
  </div>)
}