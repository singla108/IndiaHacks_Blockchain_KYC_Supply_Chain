// ui file to view the KYC

import React, {Component} from 'react';
import * as myConstClass from './constants';//to fetch abi and address for all files from a single place

import _ from 'lodash';
var Web3 = require('web3');

//communicate with testrpc which runs on port 8545
var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;
var IndiaHacksContractABI = myConstClass.CONTRACT_ABI;


var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


class view_kyc extends Component{

  constructor(props){
  super(props);
}

componentWillMount(){
// the details are fetched from a different adrees for the regulator node
  console.log(' connected client: ' + ETHEREUM_CLIENT.eth.accounts[4]);

  var data=IndiaHacksContract.getKYC({from: ETHEREUM_CLIENT.eth.accounts[4]});
  this.setState(
    {

      items:String(data[0]).split(','),
      items1:String(data[1]).split(','),
      items2:String(data[2]).split(',')

    }
  )
}


render (){
  var count=1;
  var ethNode = ETHEREUM_CLIENT.eth.accounts[4];

  var TableRows=[]
//lodash is used to iterate among the data recieved
  _.each(this.state.items,(value, index)=> {
     TableRows.push(

       <tr >
       <td><span style={{marginLeft:80,fontSize:25}}>{count++}</span></td>
       <td><span style={{marginLeft:35,fontSize:25}}>{this.state.items[index]}</span></td>
       <td><span style={{marginLeft:80,fontSize:25}}>{ETHEREUM_CLIENT.toAscii(this.state.items1[index])}</span></td>
       <td><span style={{marginLeft:35,fontSize:25}}>{ETHEREUM_CLIENT.toAscii(this.state.items2[index])}</span></td>

       </tr>

     )
   })
//UI of the page
  return(

    <div className="App">

     <div className="App-Content" >
<center>      <table style={{marginTop:80}}>
        <thead>
           <tr>

           <th><span style={{marginLeft:30,fontSize:25}}>Number</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Employee Id</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Employee Name</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Location</span></th>
              </tr>
        </thead>
        <tbody>
          {TableRows}
        </tbody>




     </table></center>

     <h4>Regulator node is connected at ethereum address: {ethNode} </h4>

</div>

 </div>
);
}
}



export default view_kyc;
