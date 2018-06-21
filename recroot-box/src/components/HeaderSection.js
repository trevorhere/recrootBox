import React, { Component } from 'react';
import selfie from '../assets/selfie.jpeg'

import '../App.css';

class HeaderSection extends Component {
  render() {
    return (
      <div className="HeaderSection">
        <div className="HS-Selfie-and-Name">
          <img src={selfie} className="HS-Selfie" alt="selfie" />
          <hr/>
          <div className="HS-Name-Title-Block">
          <h1 className="HS-Name">Trevor Lane</h1>
          <h1 className="HS-Title">Student/
                                   Developer</h1>
          </div>
        </div> 
           <p className="HS-Bio"> 
            {this.props.Bio}  
            {this.props.SelfieUrl}
        </p>
        <div className="HS-Links">
            <a href="">Email</a>
            <a href="">GitHub</a>
            <a href="">LinkedIn</a>
            <a href="">Resume</a>
        </div>    
      </div>
    );
  }
}

export default HeaderSection;
