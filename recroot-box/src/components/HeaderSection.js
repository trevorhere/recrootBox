import React, { Component } from 'react';
import selfie from '../assets/selfie.jpeg'
import { firstName, lastName, title, bio, email, gitHub, linkedIn, resume } from '../globalVariables';
import '../App.css';

class HeaderSection extends Component {
  render() {
    return (
      <div className="HeaderSection">
        <div className="HS-Selfie-and-Name">
          <img src={selfie} className="HS-Selfie" alt="selfie" />
          <hr/>
          <div className="HS-Name-Title-Block">
          <h1 className="HS-Name">{firstName} {lastName}</h1>
          <h2 className="HS-Title">{title}</h2>
          </div>
        </div> 
           <p className="HS-Bio"> 
            {bio}  
           </p>
        <div className="HS-Links">
            <a href={email} >Email</a>
            <a href={gitHub}>GitHub</a>
            <a href={linkedIn}>LinkedIn</a>
            <a href={resume}>Resume</a>
        </div>    
      </div>
    );
  }
}

export default HeaderSection;
