import React, { Component } from "react";
import { portfolioItems } from "../ProfileInformation";
import { Card, CardTitle, Button, Col, Row } from "react-materialize";

class PortfolioSection extends Component {
  render() {
    return (
      <div className="PortfolioSection">
        <h1 className="PS-Title">Recent Projects</h1>
        <div className="PS-List">
          <Row children={2}>
            {portfolioItems.map((item, index) => {
              return (
                <Col key={index} s={12} m={4} l={4} xl={4}>
                  <Card
                    header={<CardTitle image={item.imageUrl} waves="light" />}
                    title={item.title}
                  >
                    <hr />
                    {item.description}
                    <br />
                    <br />

                    <Button waves="light">
                      <a style={{ color: "white" }} href={item.link}>
                        View{" "}
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
