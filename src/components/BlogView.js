import React, { Component } from "react";
import "../App.css";
import { Preloader, Row, Col } from "react-materialize";
import ReactMarkdown from "react-markdown";
import { accent } from "../ProfileInformation";

class BlogView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      title: null,
      date: null,
      fileName: null,
      content: null
    };
  }

  title = {
    textAlign: "center",
    alignSelf: "center",
    fontSize: "250%"
  };

  content = {
    fontSize: "1.5em",
    lineHeight: "1.6",
    letterSpacing: "-0.02em",
    fontFamily: 'Tinos'
  };

  keepReadingLink = {
    color: accent,

  }

  abbrContent(content) {
    if (content.split(" ").length < 150) {
      return content;
    }
    let arr = content.split(" ").slice(0, 150);
    arr.push("....");
    return arr.join(" ");
  }

  componentDidMount() {
    const { title, date, fileName, content } = this.props;

    this.setState({
      title,
      date,
      content,
      fileName,
      isLoaded: true
    });
  }

  render() {
    const { error, isLoaded, title, date, fileName, content } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Preloader style={this.preLoader} size="small" />;
    } else {
      return (
        <article>
          <Col s={0} l={3}></Col>
          <Col s={12} l={6}>
            <Row>
              {/* <hr className="Divider Blue" /> */}
              <span>{date}</span>
            </Row>
            <Row style={this.content}>
              <ReactMarkdown source={this.abbrContent(content)} />

            </Row>
            {content.length > 500 ? (
              <div className="keepReadingLink">
                <a style={this.keepReadingLink} href={`/posts/${fileName}/68cc754fb298f3121b5b2b4cfaa754d4`}>
                  Keep Reading
                </a>
              </div>
            ) : null}
            <hr className="Divider Blue" />

          </Col>
          <Col s={0} l={3}></Col>

        </article>
      );
    }
  }
}

export default BlogView;
