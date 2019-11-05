import React, { Component } from "react";
import "../../App.css";

import { Preloader, Row, Col } from "react-materialize";
import { accent } from "../../ProfileInformation";


class LinkView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      title: null,
      content: null,
      filename: null,
      date: null
    };
  }

  abbrContent(content) {
    return content.substr(0, 500);
  }

  content = {
    width: "100%",
    fontSize: "100%",
    letterSpacing: "-0.02em"
  };

  keepReadingLink = {
    color: accent,
    display: "flex",
    flexDirection: "row"
  }

  componentDidMount() {
    const { title, date, filename, content } = this.props;

    this.setState({
      title,
      date,
      content,
      filename,
      isLoaded: true
    });
  }

  render() {
    const { error, isLoaded, title, date, filename, content } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Preloader style={this.preLoader} size="small" />;
    } else {
      return (
        <article>
          <Col s={0} l={3}></Col>
          <Col s={12} l={6}>
            <div className="keepReadingLink" style={this.content}>

              <a style={this.keepReadingLink} href={`/posts/${filename}/68cc754fb298f3121b5b2b4cfaa754d4`}>
                <Col s={6}>
                  <span>{title}</span>
                </Col>
                <Col style={{ textAlign: "right" }} s={6}>
                  <span className="date">{date}</span>
                </Col>
              </a>
              <hr className="Divider Blue" />
            </div>
          </Col>
          <Col s={0} l={3}></Col>
        </article>
      );
    }
  }
}

export default LinkView;
