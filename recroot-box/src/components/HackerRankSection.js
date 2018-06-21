import React, { Component } from 'react';
// import './App.css';

class  HackerRankSection extends Component {
  constructor(){
    super();
    this.state = {
      data : {},
      models:[],
      isLoading: false,
      error: null
    };
  }

  componentDidMount(){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://www.hackerrank.com/rest/hackers/trevoranthonyla1/badges'


    this.setState({isLoading: true});
    fetch(proxyUrl + targetUrl)
    .then(response => {
      if(response.ok){
        return response.json();
      } else {
        console.log("error with api request");
      }
    })
    .then((data) =>  { 
        this.setState({data, isLoading: false})
        this.setState({models: data.models})
    
    })
    .catch(error => this.setState({error, isLoading: false}))

    //this.state.models = this.state.data.models;
  
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="RecrootBoxSectionItem" style={{minheight: '20vh', padding: '30px'}}>
        {/* {this.state.data}  */}
        <h1>HackerRank</h1>
        <ul>
        {this.state.models.map((item,index) => {
                    return (
                      <li key = {index}>
                      - {item.badge_name}
                      - stars: {item.stars}
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

 export default HackerRankSection ;
