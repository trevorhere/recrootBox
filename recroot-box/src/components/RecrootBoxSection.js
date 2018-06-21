import React, { Component } from 'react';
// import LinkedInSection from './GithubSection';
import HackerRankSection from './HackerRankSection';
import GithubSection from './GithubSection'
// import './App.css';

class  RecrootBoxSection extends Component {
  render() {
    return (
      <div className="RecrootBoxSection" style={{height: '100vh'}}>
       <GithubSection/>
       <HackerRankSection />
      </div>
    );
  }
}

 export default RecrootBoxSection ;
