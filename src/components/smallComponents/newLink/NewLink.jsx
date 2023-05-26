import React from "react";
import { Link } from "react-router-dom";

const NewLink = ({ text, route }) => {
  return <Link to={route}>{text}</Link>;
};

export default NewLink;
