import React, { Component } from 'react';


class PortfolioSectionItem extends Component {
  render() {
    return (
      <div className="PortfolioSectionItem SliderContainer" 
      style={{
          backgroundColor:"black", 
          backgroundImage: `url(${this.props.ImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"

          }} >
        
        <div className="SliderItem">
        <h1>{this.props.Title}</h1>
        <p>{this.props.Description}</p>
        <button className="PI-Button">
        <a href={this.props.Link}>View</a>
        </button>    
        </div>
      </div>
    );
  }
}

export default PortfolioSectionItem;
