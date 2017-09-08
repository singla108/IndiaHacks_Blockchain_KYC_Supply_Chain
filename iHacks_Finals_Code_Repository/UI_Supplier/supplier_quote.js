// ui file to update supplier quote

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
    ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[1];
    obj.preventDefault();
    var tgt=obj.target;


    var url_string = window.location.href;
    var url = new URL(url_string);
    var port = url.port;

    var supplier = 'HP';


    if (port == 3001)
    {
      var supplier = 'HP';
    }
    else if (port == 3002)
    {
      var supplier = 'Dell';
    }
    else if (port == 3003)
    {
      var supplier = 'Apple';
    }

  if(IndiaHacksContract.req_login(this.refs.reqId.value))
  {
    IndiaHacksContract.place_quotes(this.refs.reqId.value,this.refs.amount.value, supplier);

    alert("Your quote has been placed successfully, Thank You!")

    window.location.assign('/start');
  }
  else {
    alert("Requisition details not found, Please check!")
  }

  },


  render:function(){
    return(

      <table>
      <tr>
        <th>Place your quote for Laptops..</th>
        <th></th>
        </tr>
        <tr>
          <td>Requisition Id:</td>
          <td><input type="text" ref="reqId" /></td>
        </tr>

        <tr>
          <td>Amount in Total (inc Tax) for all Laptops in INR</td>
          <td><input type="text" ref="amount" /></td>
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
