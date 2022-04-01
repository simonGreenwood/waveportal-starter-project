import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer"> 
      <div className="dataContainer">
        <div className="header">
          👋 Hey there!
        </div>

        <div className="bio">
        I'm Simon. I like full stack and web3 development.
        </div> 

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
