import React, { Component } from 'react';
// import LinkedInSection from './GithubSection';
import HackerRankSection from './HackerRankSection';
import GithubSection from './GithubSection'
import GHRepos from './GHRepos';
// import './App.css';

class  RecrootBoxSection extends Component {
  render() {
    return (
      <div className="RecrootBoxSection" style={{height: '100vh'}}>
      <div style={{display: 'flex' , flexDirection: 'row', justifyContent: 'space-between' }}>
       <GithubSection/>
       <GHRepos />
       <HackerRankSection />
       </div>
      </div>
    );
  }
}

 export default RecrootBoxSection ;
