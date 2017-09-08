pragma solidity ^0.4.8;

//Smart contract developed in Solidity for kyc and supplychain integration
// India Hacks
// By Ashish Singla & Deeksha Sachdeva - RBS_Blockgeeks

contract IndiaHacks{


//employee details recieved during the kyc are stored in a struct called KYC
  struct KYC{
       uint empId;
       bytes32 name;
       bytes32 location;
  }

//an array of type struct to store the details of the employees
  KYC[] public kyc;

//store KYC information on the blockchain i.e. Emp Id, Name and Location
  function do_KYC(uint _empId, bytes32 _name, bytes32 _location)
            returns (bool success){

      KYC memory newKYC;

       newKYC.empId=_empId;
       newKYC.name=_name;
       newKYC.location=_location;

       kyc.push(newKYC);

     return true;
  }


// data structure for mapping(hashmap) between employee ID and names
mapping (uint => bytes32) public admins;


//create a mapping(hashmap) between employee ID and names
  function signup(uint _empId, bytes32 _name){
    admins[_empId]=_name;
  }

//check whether the employee is already registered in KYC using emp Id
  function login(uint empId) constant returns (bool)
{

    if(admins[empId]== 0)
       return false;
    else return true;
}


//create a mapping of the employeeId and the requisition he has raised using requisition id
mapping (uint => uint) public req_admins;

function req_signup(uint _requisitionId, uint _empId){
  req_admins[_requisitionId]=_empId;
}
//check whether a requisition of that id is made or its a invalid id
function req_login(uint _requisitionId) constant returns (bool)
{

  if(req_admins[_requisitionId]== 0)
     return false;
  else return true;
}


// data structure for mapping order to the requisition if to a supplier
mapping (uint => bytes32) public req_supplier_order_admins;

//map the order corresponding to requisition id to a supplier
function req_supplier_order_signup(uint _requisitionId, bytes32 _supplier){
  req_supplier_order_admins[_requisitionId]=_supplier;
}

// validate the order is alreday placed corresponding to the requisition for a supplier
function req_supplier_order_login(uint _requisitionId) constant returns (bool)
{

  if(req_supplier_order_admins[_requisitionId]== 0)
     return false;
  else return true;
}

// to view all the registered KYC in the regulator node
  function getKYC() constant returns (uint[],bytes32[],bytes32[]){
       uint length =kyc.length;

       uint[] memory empIds = new uint[](length);
       bytes32[] memory names = new bytes32[](length);
       bytes32[] memory locations = new bytes32[](length);

       for(uint i=0; i< empIds.length; i++){

         KYC memory currentKYC;

         currentKYC = kyc[i];

         empIds[i]=currentKYC.empId;
         names[i]=currentKYC.name;
         locations[i]=currentKYC.location;
       }

      return (empIds, names, locations);

  }

//suppliers can view KYC details of the employee who has placed the order
  function getKYCforEmployee(uint empId) constant returns (uint,bytes32,bytes32){
       uint length =kyc.length;

       uint[] memory empIds = new uint[](length);

       for(uint i=0; i< empIds.length; i++){

         KYC memory currentKYC;

         currentKYC = kyc[i];

         empIds[i]=currentKYC.empId;

         if(empIds[i] == empId)
         {
           return (currentKYC.empId,currentKYC.name,currentKYC.location);
         }

       }

      return (empId, 'Could not find Employee Details', 'Could not find Employee Details');

  }

//A struct to store the requisition details
    Requisition [] public requisition;
    struct Requisition {
    uint empId;
    uint requisitionId;
    uint qty;
    }

//store the requisitions recieved on the blockchain i.e. employee Id, requisition Id and Quantity
function place_requisition(uint _empId, uint _requisitionId,uint _qty) returns (bool success){

        Requisition memory newRequisition;

        newRequisition.empId=_empId;
        newRequisition.requisitionId=_requisitionId;
        newRequisition.qty=_qty;

        requisition.push(newRequisition);

        return true;
}

//function to support generation of new requisition id
function get_maxRequisitionNumber() constant returns (uint)
{
  uint location = requisition.length - 1;
  Requisition memory currentRequisition;
  currentRequisition = requisition[location];

  uint reqId = currentRequisition.requisitionId;


  return (reqId);
}


// to view all the requisitions placed so far by the regulator, supplier and employee node
function get_RequisitionDetails() constant returns ( uint[],uint[],uint[]){
       uint length=requisition.length;

       uint[] memory empIds = new uint[](length);
       uint[] memory requisitionIds = new uint[](length);
       uint[] memory qtys = new uint[](length);

       for(uint i=0; i< requisition.length; i++){
         Requisition memory currentRequisition;

         currentRequisition = requisition[i];

         empIds[i]=currentRequisition.empId;
         requisitionIds[i]=currentRequisition.requisitionId;
         qtys[i]=currentRequisition.qty;
      }
      return (empIds,requisitionIds,qtys);
}

Quotes[] public quote;

// a structure to store all the quotation details from the suppliers corresponding to a requisition

struct Quotes {
  uint requisitionId;
  uint price;
  bytes32 vendor;
}

//Store the quotations on the blockchain by the suppliers i.e. requisition id, price, vendor
function place_quotes( uint _requisitionId, uint _price, bytes32 _vendor) returns (bool success) {

         Quotes memory newQuote;

         newQuote.requisitionId =_requisitionId;
         newQuote.price =_price;
         newQuote.vendor =_vendor;

         quote.push(newQuote);

         return true;
}

// the employee & regulator can view all the quotations recieved which is fetched by this function using their blockchain node
function get_quotations() constant returns (uint[],uint[],bytes32[]){
      uint length=quote.length;

      uint[] memory requisitionIds = new uint[](length);
      uint[] memory prices = new uint[](length);
      bytes32[] memory vendors = new bytes32[](length);

      for(uint j=0; j< quote.length; j++){
        Quotes memory currentQuote;
        currentQuote = quote[j];

         requisitionIds[j]=currentQuote.requisitionId;
         prices[j]=currentQuote.price;
         vendors[j]=currentQuote.vendor;
     }
     return (requisitionIds,prices,vendors);

}

Orders[] public order;
// a structure to store all the order details
struct Orders {
  uint requisitionId;
  bytes32 vendor;
}
// store the orders placed by the employee on the blockchain i.e. requisitionId & vendor
function place_orders( uint _requisitionId, bytes32 _vendor) returns (bool success) {

         Orders memory newOrder;

         newOrder.requisitionId =_requisitionId;
         newOrder.vendor =_vendor;

         order.push(newOrder);

         return true;
}
//the regulator, employee & supplier can view the orders on their respective nodes
function get_orders() constant returns (uint[],bytes32[]){
      uint length=order.length;

      uint[] memory requisitionIds = new uint[](length);
      bytes32[] memory vendors = new bytes32[](length);

      for(uint j=0; j< order.length; j++){
        Orders memory currentOrder;
        currentOrder = order[j];

         requisitionIds[j]=currentOrder.requisitionId;
         vendors[j]=currentOrder.vendor;
     }
     return (requisitionIds,vendors);

}



}
