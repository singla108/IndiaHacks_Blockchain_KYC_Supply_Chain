// ui file to check KYC in supplier node

import Web3 from 'web3'
import * as myConstClass from './constants';

var React = require('react');
var ReactDOM=require('react-dom');



var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;
var IndiaHacksContractABI = myConstClass.CONTRACT_ABI;

var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


var check_KYC = React.createClass({




  handleClick(event) {
      event.preventDefault()

      var url_string = window.location.href;


      var empId = this.refs.empId.value;




    var data = IndiaHacksContract.getKYCforEmployee(empId);



    alert('Employe Id: ' + data[0] + '\n Name: ' + ETHEREUM_CLIENT.toAscii(data[1]) + '\n Location: ' + ETHEREUM_CLIENT.toAscii(data[2]));

    window.location.assign('/start');


},


render() {


  return (

    <table>
    <tr>
      <th>Please enter your RBS Employee Id to check KYC</th>
      <th></th>
    </tr>
      <tr>
        <td>RBS Employee Id: </td>
        <td><input type="text" ref="empId" /></td>
      </tr>

      <tr>
        <td></td>
        <td><input type="button" href='#' style={{background:"#D3D3D3",color:"black"}} onClick={this.handleClick.bind(this)} value=" Submit " /></td>
      </tr>


    </table>

  );
}


});
export default check_KYC;
