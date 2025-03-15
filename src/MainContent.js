
import React from 'react';
import './MainContent.css';
import statue from '../images/statue.png';


function MainContent() {
  return (
    <div className="maindiv">
    <div className="background">
      <img className="image-container" src={statue} alt="Statue" />
    </div>
   
    </div>
  );
}

export default MainContent;
