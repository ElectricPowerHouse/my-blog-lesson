import React from 'react';
import ElementContent from './elements-content.js';

let itemsNum = 6;
let elements = ElementContent;


{/*
for ( let i = 0; i<itemsNum; i++){
  elements.push(<div className= "square" key={i} />)
}
*/}

const map1 = new Map()



elements = elements.map((element) => (

    <div className="square" key={element.name} style={{ backgroundColor: element.color, color: 'white'}} > {element.name}</div>
    ));



const AboutPage = () => {
  return (<div className="square-container"> {elements} </div>);
}

export default AboutPage;
