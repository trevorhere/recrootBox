import React, { Component } from 'react';
import repoNumShow from '../globalVariables';
// import './App.css';


  let times = [];
  let formatData = (data) => {
    for(let i = 0; i < data.length; i ++)
    {
      times.push([data[i].name, data[i].updated_at.slice(0,10)]);
    }
  }

  let sortTimes = (length) => {
    times.sort(function(a, b) {
        a = new Date(a[1]);
        b = new Date(b[1]);
        return a>b ? -1 : a<b ? 1 : 0;
       });
    times = times.slice(0,length);
  }

  let printTimes = () => {
    for(let i = 0; i < times.length; i ++)
    {
      console.log(i + ': [' + times[i][0] + ',' + times[i][1] + ']');
    }
  }


class  GHRepos extends Component {
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
    fetch('https://api.github.com/users/trevorhere/repos')
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
    formatData(this.state.data);
    sortTimes(repoNumShow.repoNumShow);
 
    return (
      <div className="RecrootBoxSectionItem" style={{minheight: '20vh', padding: '30px'}}>
        {this.state.data.id}
        <h1>Recent projects</h1>
        <ul>
        {
            times.map((item,index) => {
                    return (
                      <li key = {index}>
                      - {item[0]}
                      - {item[1]}
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

 export default GHRepos ;
