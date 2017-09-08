// User KYC UI - the file contains react.js code to populate the index bar

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import start from'./start';

import user_KYC from'./user_KYC';
import login from'./login';
import login_orders from'./login_orders';
import userRequisition from './User_Requisition';
import viewSupplierQuotations from'./viewSupplierQuotations';
import viewRequisitions from'./viewRequisitions';
import placeOrder from'./placeOrder';
import viewPlacedOrder from'./viewPlacedOrder';


import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(<Router>

  <div className="container">
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">

      <b><a className="navbar-brand" href="/start"><span> Royal Bank of Scotland </span></a></b>
    </div>


    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li><NavLink activeClassName="activeNav" to = "/user_KYC" >User Registration(KYC)</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/login" >Place Requisition</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/viewRequisitions" >View Requisitions</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/viewSupplierQuotations" >View Quotations</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/login_orders" >Place Order</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/viewPlacedOrder" >View Orders</NavLink></li>


      </ul>

    </div>

  </div>
</nav>

      <hr/>
      <Route path="/user_KYC" component={user_KYC} history ={history}/>
      <Route path="/login" component={login} history ={history}/>
      <Route path="/login_orders" component={login_orders} history ={history}/>
      <Route path="/viewSupplierQuotations" component={viewSupplierQuotations} history ={history}/>
      <Route path="/userRequisition" component={userRequisition} history ={history}/>
      <Route path="/viewRequisitions" component={viewRequisitions} history ={history}/>
      <Route path="/placeOrder" component={placeOrder} history ={history}/>
      <Route path="/viewPlacedOrder" component={viewPlacedOrder} history ={history}/>

    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
