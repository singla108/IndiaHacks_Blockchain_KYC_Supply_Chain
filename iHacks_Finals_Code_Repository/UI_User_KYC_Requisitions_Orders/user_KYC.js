// UI file to update User KYC in blockchain

import Web3 from 'web3'

import App from './App';

import * as myConstClass from './constants';

var React = require('react');
var ReactDOM=require('react-dom');

var constants=require('constants');


var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;
var IndiaHacksContractABI = myConstClass.CONTRACT_ABI
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);
var user_KYC = React.createClass({


  handleClick(event) {
      event.preventDefault()

      ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[0];

      console.log(this.refs.empId.value)
      console.log(this.refs.name.value)
      console.log(this.refs.location.value)


      var _empId=this.refs.empId.value
      var _name=this.refs.name.value
      var _location=this.refs.location.value

      IndiaHacksContract.do_KYC(_empId, _name, _location) ;
      IndiaHacksContract.signup(_empId,_name);


      alert("Your Information has been Successfully Submitted, Thank You!!")


      window.location.assign('/start');

},


render() {
  return (



    <table>
    <tr>
      <th>User Registration (KYC)</th>
      <th></th>
    </tr>
      <tr>
        <td>RBS Employee Id: </td>
        <td><input type="text" ref="empId" /></td>
      </tr>
      <tr>
        <td>Name:</td>
        <td><input type="text" ref="name" /></td>
      </tr>

      <tr>
        <td>Location:</td>
        <td>
        <select id="location" ref="location">
            <option value="Gurugram">Gurugram</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="London">London</option>
            <option value="Edinburgh">Edinburgh</option>
        </select>
        </td>
      </tr>

      <tr>
        <td></td>
        <td><input type="button" href='#' style={{background:"#D3D3D3",color:"black"}} onClick={this.handleClick.bind(this)} value=" Submit " /></td>
      </tr>
    </table>


  );







}


});

export default user_KYC;
