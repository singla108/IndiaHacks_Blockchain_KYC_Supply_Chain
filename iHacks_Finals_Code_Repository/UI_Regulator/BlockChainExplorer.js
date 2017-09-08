import Web3 from 'web3'

import App from './App';


var React = require('react');
var ReactDOM=require('react-dom');



var start = React.createClass({


  handleClick(event) {
    event.preventDefault();
    window.location.replace("http://localhost:8000/#/");


},

render() {
  return (
    <table>
    <tr>
      <th>Navigate Block Chain ...</th>
      <th><input type="button" href='#' style={{background:"#D3D3D3",color:"black"}} onClick={this.handleClick.bind(this)} value=" Submit " /></th>
    </tr>


    </table>
  );

}

});
export default start;
