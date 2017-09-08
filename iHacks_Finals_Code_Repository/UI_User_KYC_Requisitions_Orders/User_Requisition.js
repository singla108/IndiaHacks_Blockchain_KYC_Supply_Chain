// UI file for placing the requisition

import * as myConstClass from './constants';

var React=require('react');
var ReactDOM=require('react-dom');
var Web3 = require('web3');
var _=require('lodash');

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;

var IndiaHacksContractABI = myConstClass.CONTRACT_ABI;
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);




var User_Requisition=React.createClass({

  handleClick:function(obj){
    ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[0];
    obj.preventDefault();
    var tgt=obj.target;


    var url_string = window.location.href;
    var url = new URL(url_string);
    var empId = url.searchParams.get("_empId");
    console.log(empId);

    console.log(this.refs.qty.value);


    var requisitionId = IndiaHacksContract.get_maxRequisitionNumber();

    requisitionId = parseInt(requisitionId) + 100;
    console.log(requisitionId);


    IndiaHacksContract.place_requisition(empId,requisitionId,this.refs.qty.value);
    IndiaHacksContract.req_signup(requisitionId, empId);

    alert("Your requisition is placed successfully with Requisition Id as: " + requisitionId + "\nThank You!");

    window.location.assign('/start');


  },


  render:function(){
    return(

      <table>
      <tr>
        <th>Create your Requisition for Laptops..</th>
        <th></th>
        </tr>
        <tr>
          <td>Quantity</td>
          <td><input type="text" ref="qty" /></td>
        </tr>

        <tr>
          <td></td>
          <td><input type="button" href='#' style={{background:"#D3D3D3",color:"black"}} onClick={this.handleClick.bind(this)} value=" Submit " /></td>
        </tr>
      </table>
        );
  }
});


export default User_Requisition;
