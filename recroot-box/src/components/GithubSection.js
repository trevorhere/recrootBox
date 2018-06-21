import React, { Component } from 'react';
// import './App.css';

class  GithubSection extends Component {
  constructor(){
    super();
    this.state = {
      data : [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount(){
    this.setState({isLoading: true});
    fetch('https://api.github.com/users/trevorhere/events')
    .then(response => {
      if(response.ok){
        return response.json();
      } else {
        console.log("error with api request");
      }
    })
    .then(data => this.setState({data, isLoading: false}))
    .catch(error => this.setState({error, isLoading: false}))
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="RecrootBoxSection" style={{height: '100vh'}}>
        {this.state.data.id}
        <h1>Github</h1>
        <ul>
        {this.state.data.map((item,index) => {
                    return (
                      <li key = {index}>
                      - {item.repo.name}
                      - {item.type}
                      - <a href={item.repo.url}>View</a>
                      </li>
                    )
                  })}
        </ul>          
      </div>
    );
  }
}
  //build out useful stats
  // recent activity
  // repos
  // stars

  //webscrape from hacker rank 
  // web scrape from free code camp
  // leet code
  // code chef

 export default GithubSection ;
