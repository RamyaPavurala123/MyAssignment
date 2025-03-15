
import React from 'react';
import './MainContent.css';
function MainContent() {
  return (
    <div className="maindiv">
    <div className="background">
    <img src={`${process.env.PUBLIC_URL}/images/statue.png`} alt="Statue" />
    </div>
    </div>
  );
}

export default MainContent;
