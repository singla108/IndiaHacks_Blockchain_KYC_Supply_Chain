// login file for the orders

import Web3 from 'web3'
import * as myConstClass from './constants';

var React = require('react');
var ReactDOM=require('react-dom');


//var createReactClass = require('create-react-class');
//var ReactDOM = require('react-dom');

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;

var IndiaHacksContractABI = myConstClass.CONTRACT_ABI;
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


var login = React.createClass({




  handleClick(event) {
      event.preventDefault()
      ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[0];

      var empId = this.refs.empId.value


    if(IndiaHacksContract.login(empId)){

    alert(" You are Sucessfully Logged In to Create Purchase Orders!")

    //ReactDOM.render(<User_Requisition/>,document.getElementById('root'))
    window.location.assign('/placeOrder?_empId='+empId);

  }
    else{
     alert("We could not find your details in RBS users with access to Create Purchase Orders!")
     window.location.assign('/start');
   }

},


render() {
  return (

    <table>
    <tr>
      <th>Please enter your RBS Employee Id</th>
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
export default login;
