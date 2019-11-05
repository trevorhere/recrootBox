import React from "react";
import "../App.css";
import { Preloader } from "react-materialize";
import { accent } from '../ProfileInformation'

const PreLoader = () => {
  return (
    <div
      style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
    >
      <Preloader
        color={accent} size="small" />;
      </div>
  )
}

export default PreLoader;