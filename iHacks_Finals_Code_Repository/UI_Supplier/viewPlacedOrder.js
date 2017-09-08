// ui file to view placed orders

import React, {Component} from 'react';
import _ from 'lodash';
import * as myConstClass from './constants';

var Web3 = require('web3');


var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var IndiaHacksContractAddress = myConstClass.CONTRACT_ADDRESS;
var IndiaHacksContractABI = myConstClass.CONTRACT_ABI;

var IndiaHacksContract = ETHEREUM_CLIENT.eth.contract(IndiaHacksContractABI).at(IndiaHacksContractAddress);


class viewPlacedOrder extends Component{

  constructor(props){
  super(props);

}
componentWillMount(){
  var data=IndiaHacksContract.get_orders()
  //console.log(data)

  this.setState(
    {

      items:String(data[0]).split(','),
      vendors:String(data[1]).split(',')
    }
  )


}


render (){
  var count=1;
  var TableRows=[]

  _.each(this.state.items,(value, index)=> {
     TableRows.push(

       <tr >
       <td><span style={{marginLeft:80,fontSize:25}}>{count++}</span></td>
       <td><span style={{marginLeft:35,fontSize:25}}>{this.state.items[index]}</span></td>
       <td><span style={{marginLeft:80,fontSize:25}}>{ETHEREUM_CLIENT.toAscii(this.state.vendors[index])}</span></td>


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

              <th><span style={{marginLeft:30,fontSize:25}}>Requisition Id</span></th>

              <th><span style={{marginLeft:30,fontSize:25}}>Vendor</span></th>
              </tr>

        </thead>
        <tbody>
          {TableRows}
        </tbody>

     </table></center>

</div>

 </div>
);
}
}



export default viewPlacedOrder;
