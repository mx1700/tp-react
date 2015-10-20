var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('./components/HomePage');

let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(
  <HomePage></HomePage>,
  document.getElementById('example')
);
