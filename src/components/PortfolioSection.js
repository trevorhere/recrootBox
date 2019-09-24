import React, { Component } from "react";
import { portfolioTitle, portfolioItems, portfolioSectionBackgroundColor } from "../ProfileInformation";
import { Card, CardTitle, Button, Col, Row } from "react-materialize";

const PSListStyles = {
  backgroundColor: portfolioSectionBackgroundColor
}


let darkStyle = {
  color: 'white',
  backgroundColor: 'black',
};

class PortfolioSection extends Component {

  render() {

    let darkModeStyle = this.props.darkMode ?
      "black white-text" : {};

    return (
      <div className="PortfolioSection" style={PSListStyles} >
        <h1 className="PS-Title">{portfolioTitle}</h1>
        <div style={PSListStyles} className="PS-List">
          <Row children={2}>
            {portfolioItems.map((item, index) => {
              return (
                <Col key={index} s={12} m={4} l={4} xl={4}>
                  <Card
                    className={darkModeStyle}
                    header={<CardTitle image={item.imageUrl} waves="light" />}
                    title={item.title}
                  >
                    <hr />
                    {item.description}
                    <br />
                    <br />

                    <Button waves="light"  node="a" href={item.link}>
                      <a style={{ color: "white" }} >
                        View
                      </a>
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default PortfolioSection;
