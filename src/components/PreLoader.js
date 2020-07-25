import React from "react";
import "./app.css";
import { Preloader } from "react-materialize";
import { accent } from '../siteData'

const PreLoader = () => {
  return (
    <div
      style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <Preloader
        color="blue" size="small" />;
      </div>
  )
}

export default PreLoader;