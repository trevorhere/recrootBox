import React from 'react';
import { Row } from "react-materialize"
import { accent, blogName } from "../../siteData"
import { Link } from "gatsby"
import { FaTh, FaList } from "react-icons/fa";
import styled from 'styled-components'

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
  top: "10px"

};

const viewSwitcher = {
  color: "#fff",
  fontFamily: "Roboto Mono",
  textEmphasis: "center",
  position: "absolute",
  left: "30px",
  top: "14px"
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

const HeaderLink = styled(Link)`
  color: ${accent};
  font-family:  Roboto Mono;
  text-emphasis: center;
  position: absolute;
  right: 30px;
  top: 10px;
  `