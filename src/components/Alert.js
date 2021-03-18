import React from "react";
import "../styles/Alert.css";

const Alert = ({ alert }) => {
  return <div className={`Alert ${alert.type}`}>{alert.message}</div>;
};

export default Alert;
