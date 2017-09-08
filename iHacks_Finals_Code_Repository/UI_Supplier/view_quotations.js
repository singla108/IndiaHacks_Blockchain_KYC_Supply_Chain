// ui file to view the quotations 
import React, {Component} from 'react';
import _ from 'lodash';
import * as myConstClass from './constants';

var Web3 = require('web3');


var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;
var IndiaHacksContractABI = myConstClass.CONTRACT_ABI;

var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


class view_quotations extends Component{

  constructor(props){
  super(props);

}
componentWillMount(){

  var data ;

  var ethNode ;

  var url_string = window.location.href;
  var url = new URL(url_string);
  var port = url.port;

  if (port == 3001){
    data=IndiaHacksContract.get_RequisitionDetails({from: ETHEREUM_CLIENT.eth.accounts[1]});
  }
  else if (port == 3002){
    data=IndiaHacksContract.get_RequisitionDetails({from: ETHEREUM_CLIENT.eth.accounts[2]});
  }
  else if (port == 3003){
    data=IndiaHacksContract.get_RequisitionDetails({from: ETHEREUM_CLIENT.eth.accounts[3]});
  }

  console.log('connected node is :' + ethNode)



  this.setState(
    {

      items:String(data[0]).split(','),
   reqIds:String(data[1]).split(','),
   qtys:String(data[2]).split(',')
    }
  )


}


render (){
  var count=1;
  var TableRows=[]

  var url_string = window.location.href;
  var url = new URL(url_string);
  var port = url.port;


  var ethNode;

  if (port == 3001)
    ethNode = ETHEREUM_CLIENT.eth.accounts[1];
  else if (port ==3002)
    ethNode = ETHEREUM_CLIENT.eth.accounts[2];
  else if (port ==3003)
   ethNode = ETHEREUM_CLIENT.eth.accounts[3];

  _.each(this.state.items,(value, index)=> {
     TableRows.push(

       <tr >
       <td><span style={{marginLeft:80,fontSize:25}}>{count++}</span></td>
       <td><span style={{marginLeft:35,fontSize:25}}>{this.state.items[index]}</span></td>
            <td><span style={{marginLeft:35,fontSize:25}}>{this.state.reqIds[index]}</span></td>
       <td><span style={{marginLeft:80,fontSize:25}}>{this.state.qtys[index]}</span></td>


       </tr>

     )
   })

  return(

    <div className="App">

     <div className="App-Content" >
<center>      <table style={{marginTop:80}}>
        <thead>
           <tr>

           <th><span style={{marginLeft:30,fontSize:25}}>Number</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Employee Id</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Requisition Id</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Quantity</span></th>
              </tr>

        </thead>
        <tbody>
          {TableRows}
        </tbody>

     </table></center>

     <h4>Supplier node is connected at ethereum address: {ethNode} </h4>
</div>

 </div>
);
}
}



export default view_quotations;
