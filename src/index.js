import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
  return <div>Hello React! I am </div>;
};

ReactDOM.render(<App />, document.getElementById("index"));
