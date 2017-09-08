// ui file for placing the orders
import * as myConstClass from './constants';

var React=require('react');
var ReactDOM=require('react-dom');
var Web3 = require('web3');
var _=require('lodash');

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;

var IndiaHacksContractABI = myConstClass.CONTRACT_ABI;
var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);




var placeOrder=React.createClass({

  handleClick:function(obj){
    ETHEREUM_CLIENT.eth.defaultAccount=ETHEREUM_CLIENT.eth.accounts[0];
    obj.preventDefault();
    var tgt=obj.target;
    //var empId = this.props.params._empId;


  //  var url_string = window.location.href;
  //  var url = new URL(url_string);
  //  var empId = url.searchParams.get("_empId");
  //  console.log(empId);
  //  console.log(this.refs.reqId.value);
  //  console.log(this.refs.qty.value);

if (IndiaHacksContract.req_login(this.refs.reqId.value))
{
  if (IndiaHacksContract.req_supplier_order_login(this.refs.reqId.value) == false)
  {
    IndiaHacksContract.place_orders(this.refs.reqId.value,this.refs.vendor.value);

    IndiaHacksContract.req_supplier_order_signup(this.refs.reqId.value,this.refs.vendor.value);

    alert("Your order is placed successfully, Thank You!")

    window.location.assign('/start');
  }
  else {
    alert("Order is alreday placed with the Supplier, please check!")


  }
}
else
{
  alert("We could not find your Requisition Id!");


}

  },


  render:function(){
    return(

      <table>
      <tr>
        <th>Place Order for Laptops..</th>
        <th></th>
        </tr>
        <tr>
          <td>Requisition Id:</td>
          <td><input type="text" ref="reqId" /></td>
        </tr>

        <tr>
          <td>Vendor</td>
          <td>
          <select id="vendor" ref="vendor">
              <option value="HP">HP</option>
              <option value="Dell">Dell</option>
              <option value="Apple">Apple</option>
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


export default placeOrder;
