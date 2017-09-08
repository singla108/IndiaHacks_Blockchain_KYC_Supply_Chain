// header ui file

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import viewQuotations from'./view_quotations';
import check_KYC from'./Check_KYC';
import supplier_Quote from'./supplier_quote';
import viewPlacedOrder from './viewPlacedOrder';

import start from'./start';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

var url_string = window.location.href;
var url = new URL(url_string);
var port = url.port;

if (port == 3001)
{
  ReactDOM.render(<Router>

    <div className="container">
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">

        <b><a className="navbar-brand" href="/start"><span> Supplier (HP) </span></a></b>
      </div>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><NavLink activeClassName="activeNav" to = "/view_quotations" > View Requisitions</NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/check_KYC" > Check KYC </NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/supplier_quote" > Supplier Quote </NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/viewPlacedOrder" > View Placed Order </NavLink></li>

        </ul>

      </div>

    </div>
  </nav>

        <hr/>
        <Route path="/view_quotations" component={viewQuotations} history ={history}/>
        <Route path="/check_KYC" component={check_KYC} history ={history}/>
        <Route path="/supplier_quote" component={supplier_Quote} history ={history}/>
        <Route path="/viewPlacedOrder" component={viewPlacedOrder} history ={history}/>


      </div>
    </Router>, document.getElementById('root'));
}
else if (port == 3002)
{
  ReactDOM.render(<Router>

    <div className="container">
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">

        <b><a className="navbar-brand" href="/start"><span> Supplier ( Dell ) </span></a></b>
      </div>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><NavLink activeClassName="activeNav" to = "/view_quotations" > View Requisitions</NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/check_KYC" > Check KYC </NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/supplier_quote" > Supplier Quote </NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/viewPlacedOrder" > View Placed Order </NavLink></li>

        </ul>

      </div>

    </div>
  </nav>

        <hr/>
        <Route path="/view_quotations" component={viewQuotations} history ={history}/>
        <Route path="/check_KYC" component={check_KYC} history ={history}/>
        <Route path="/supplier_quote" component={supplier_Quote} history ={history}/>
        <Route path="/viewPlacedOrder" component={viewPlacedOrder} history ={history}/>


      </div>
    </Router>, document.getElementById('root'));


}

else if (port == 3003)
{
  ReactDOM.render(<Router>

    <div className="container">
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">

        <b><a className="navbar-brand" href="/start"><span> Supplier ( Apple ) </span></a></b>
      </div>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><NavLink activeClassName="activeNav" to = "/view_quotations" > View Requisitions</NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/check_KYC" > Check KYC </NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/supplier_quote" > Supplier Quote </NavLink></li>
          <li><NavLink activeClassName="activeNav" to = "/viewPlacedOrder" > View Placed Order </NavLink></li>
        </ul>

      </div>

    </div>
  </nav>

        <hr/>
        <Route path="/view_quotations" component={viewQuotations} history ={history}/>
        <Route path="/check_KYC" component={check_KYC} history ={history}/>
        <Route path="/supplier_quote" component={supplier_Quote} history ={history}/>
        <Route path="/viewPlacedOrder" component={viewPlacedOrder} history ={history}/>

      </div>
    </Router>, document.getElementById('root'));


}


registerServiceWorker();
