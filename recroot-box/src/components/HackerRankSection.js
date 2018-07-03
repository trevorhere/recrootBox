import React, { Component } from 'react';
import BarChart from 'react-bar-chart';
import {  LineChart, Line, XAxis,YAxis, Brush, Area, AreaChart, Tooltip, CartesianGrid } from 'recharts';
// import './App.css';



const chartData = [
 
  { date: 'Hacker BadgeOne', price: 2 },
  { date: 'Hacker BadgeTwo', price: 3 }
];
 
const margin = {top: 20, right: 20, bottom: 30, left: 40};

class  HackerRankSection extends Component {
  constructor(){
    super();
    this.state = {
      data : {},
      models:[],
      isLoading: false,
      error: null,
      width: 500
    };
  }

  componentDidMount(){
    
    window.onresize = () => {
      this.setState({width: this.refs.root.offsetWidth}); 
     };

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

  handleBarClick(element, id){ 
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }

  render() {
    console.log("HR data: " + this.state.models);
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
        <p>LineChart with panoramic brush</p>
        
          <LineChart
            width={600} height={400} data={chartData}
            margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" label="Date" />
            <YAxis domain={['auto', 'auto']} label="Stars" />
            <Tooltip />
            <Line dataKey="price" stroke="#ff7300" dot={false} />
     
          </LineChart>
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
