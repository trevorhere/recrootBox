import React, { Component } from 'react';
import { Card, CardTitle,  Button, Row, Col } from 'react-materialize';



class PortfolioSectionItem extends Component {
  render() {
    return (
        <Card key={this.props.Title} header={<CardTitle reveal image={this.props.ImageUrl} waves='light'/>}
            title={this.props.Title}
            reveal={<p>{this.props.Description}</p>}>
            <p><a href={this.props.ImageUrl}>View</a></p>
        </Card>

      // {/* <div className="PortfolioSectionItem SliderContainer"
      // style={{
      //     backgroundColor:"black",
      //     backgroundImage: `url(${this.props.ImageUrl})`,
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: "cover"

      //     }} >

      //   <div className="SliderItem">
      //   <h1>{this.props.Title}</h1>
      //   <p>{this.props.Description}</p>
      //   <button className="PI-Button">
      //   <a href={this.props.Link}>View</a>
      //   </button>
      //   </div>
      // </div> */}
    );
  }
}

export default PortfolioSectionItem;
