import React, { Component } from 'react';
import PortfolioSectionItem from './PortfolioSectionItem';
import { portfolioItems } from '../ProfileInformation';
import { Card, CardTitle, Button, Col } from 'react-materialize';
class PortfolioSection extends Component {
  render() {
    return (
      <div>
        <div>


        </div>
      <div className="PortfolioSection">
      <h1 className="PS-Title" >Recent Projects</h1>
      <div className="PS-List" >
                {portfolioItems.map((item,index) =>{
                    return (
                      <Col key={index} s={12} m={6} l={6} xl={6}>
                       <Card className="portfolio-item" header={<CardTitle  image={item.imageUrl} waves='light'/>}
                          title={item.title}
                        >
                        <hr/>
                          {item.description}
                          <br/>
                          <br/>

                          <Button waves='light'><a style={{color:"white"}} href={item.link}>View </a></Button>
                      </Card>
                      {/* <PortfolioSectionItem
                      key = {index}
                      ImageUrl = {item.imageUrl}
                      Title =   {item.title}
                      Description = {item.description}
                      Link =  {item.link}
                      /> */}
                      </Col>
                    )
                })}
                </div>
      </div>
      </div>
    );
  }
}

export default PortfolioSection;
