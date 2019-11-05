import React from 'react';
import { Row } from "react-materialize"
import { accent, blogName } from "../../ProfileInformation"
import { Link } from "react-router-dom"
import { FaTh, FaList } from "react-icons/fa";



const headerRow = {
  top: "0",
  minheight: "100px",
  backgroundColor: accent,
  display: "flex",
  justifyContent: "center"
}

const title = {
  backgroundColor: accent,
  color: "#fff",
  padding: "10px",
  margin: "0",
  fontFamily: "Roboto Mono",
  textAlign: "center",
  margin: "0 auto"

}

const headerLink = {
  color: "#fff",
  fontFamily: "Roboto Mono",
  textEmphasis: "center",
  position: "absolute",
  right: "30px",
  top: "20px"

};

const viewSwitcher = {
  color: "#fff",
  fontFamily: "Roboto Mono",
  textEmphasis: "center",
  position: "absolute",
  left: "30px",
  top: "24px"
}

const PostHeader = props => {
  const { viewToggleSwitch, listView } = props
  return (
    <Row style={headerRow}>
      <h3 style={title}>{blogName}</h3>
      {!listView ? (
        <FaList style={viewSwitcher} onClick={viewToggleSwitch} />
      ) : (
          <FaTh style={viewSwitcher} onClick={viewToggleSwitch} />
        )}
      <Link style={headerLink} to="/">
        home
      </Link>
    </Row>
  )
}

export default PostHeader;