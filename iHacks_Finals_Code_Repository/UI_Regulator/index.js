import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import blockChainExplorer from'./BlockChainExplorer';


import viewSupplierQuotations from'./viewSupplierQuotations';
import viewRequisitions from'./viewRequisitions';
import viewPlacedOrder from'./viewPlacedOrder';
import viewKYC from'./view_kyc';

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

      <b><a className="navbar-brand" href="/start"><span> Regulator View </span></a></b>
    </div>

    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li><NavLink activeClassName="activeNav" to = "/view_kyc" >View User Details (KYC)</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/viewRequisitions" >View Requisitions</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/viewSupplierQuotations" >View Quotations</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/viewPlacedOrder" >View Orders</NavLink></li>
        <li><NavLink activeClassName="activeNav" to = "/BlockChainExplorer" >Navigate Blockchain</NavLink></li>

      </ul>

    </div>

  </div>
</nav>

      <hr/>
      <Route path="/view_kyc" component={viewKYC} history ={history}/>
      <Route path="/viewSupplierQuotations" component={viewSupplierQuotations} history ={history}/>
      <Route path="/viewRequisitions" component={viewRequisitions} history ={history}/>
      <Route path="/viewPlacedOrder" component={viewPlacedOrder} history ={history}/>
      <Route path="/BlockChainExplorer" component={blockChainExplorer} history ={history}/>

    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
