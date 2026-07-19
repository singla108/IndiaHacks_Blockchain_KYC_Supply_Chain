# Ethereum KYC Procurement POC

A blockchain-based proof of concept for employee KYC verification and end-to-end procurement (requisition → supplier quotation → order) built on Ethereum. Three separate React.js clients — for employees, suppliers, and a regulator — all read from and write to a single shared smart contract.

Originally built by Ashish Singla & Deeksha Sachdeva for the IndiaHacks hackathon (RBS BlockGeeks).

## Overview

The project models a corporate procurement workflow with three participants coordinating entirely through an Ethereum smart contract, with no centralized backend database:

- **Employee** – logs in with an employee ID, submits KYC (employee ID, name, location), raises a purchase requisition, reviews supplier quotations, and places an order against a chosen supplier.
- **Supplier** – looks up an employee's KYC details, views open requisitions, submits a price quotation, and views orders placed against their quotations.
- **Regulator** – has read access across the board: all KYC records, all requisitions, all quotations, and all orders, for compliance and oversight.

## Architecture

```
iHacks_Finals_Code_Repository/
├── Contract/
│   └── IndiaHacks.sol                       # Core smart contract
├── UI_User_KYC_Requisitions_Orders/         # Employee-facing client
├── UI_Supplier/                             # Supplier-facing client
└── UI_Regulator/                            # Regulator-facing client
```

Each client is an independent `create-react-app` project. Contract connection details are centralized per-client in a `constants.js` file (`CONTRACT_ADDRESS` and `CONTRACT_ABI`), and each client talks to the chain via [web3.js](https://github.com/ethereum/web3.js).

### Smart contract: `IndiaHacks.sol`

Written in Solidity `^0.4.8`. The contract tracks four record types, each with a corresponding "admin" mapping used as a lightweight existence/lookup check:

| Data | Store | Lookup |
|---|---|---|
| KYC | `do_KYC(empId, name, location)` | `getKYC()`, `getKYCforEmployee(empId)` |
| Requisition | `place_requisition(empId, requisitionId, qty)` | `get_RequisitionDetails()`, `get_maxRequisitionNumber()` |
| Quotation | `place_quotes(requisitionId, price, vendor)` | `get_quotations()` |
| Order | `place_orders(requisitionId, vendor)` | `get_orders()` |

Authentication/registration helpers:

| Function | Purpose |
|---|---|
| `signup(empId, name)` / `login(empId)` | Registers/checks an employee ID |
| `req_signup(requisitionId, empId)` / `req_login(requisitionId)` | Registers/checks a requisition ID |
| `req_supplier_order_signup(requisitionId, supplier)` / `req_supplier_order_login(requisitionId)` | Registers/checks that an order has been placed with a supplier for a requisition |

### Client applications

**`UI_User_KYC_Requisitions_Orders`** (employee)
- `login.js` – employee login by ID
- `user_KYC.js` – submits KYC details
- `User_Requisition.js` / `placeOrder.js` – raises a requisition and places an order with a chosen supplier
- `viewRequisitions.js`, `viewSupplierQuotations.js`, `viewPlacedOrder.js` – views own requisitions, incoming quotations, and placed orders
- `login_orders.js` – order-related login flow

**`UI_Supplier`**
- `Check_KYC.js` – looks up an employee's KYC record
- `supplier_quote.js` – submits a price quotation against a requisition
- `view_quotations.js`, `viewPlacedOrder.js` – views submitted quotations and resulting orders

**`UI_Regulator`**
- `view_kyc.js` – all KYC records
- `viewRequisitions.js` – all requisitions
- `viewSupplierQuotations.js` – all quotations
- `viewPlacedOrder.js` – all orders
- `BlockChainExplorer.js` – general chain/record explorer view

## Prerequisites

- [Node.js](https://nodejs.org/) and npm
- An Ethereum client for local development, e.g. [Ganache](https://trufflesuite.com/ganache/) or `geth`, exposing an RPC endpoint at `http://localhost:8545`
- [Truffle](https://trufflesuite.com/) or `solc` to compile and deploy the Solidity contract (compatible with Solidity `^0.4.8`)

## Getting Started

### 1. Deploy the smart contract

Compile and deploy `iHacks_Finals_Code_Repository/Contract/IndiaHacks.sol` to your local Ethereum network, pointed at `http://localhost:8545`.

### 2. Update contract configuration

Each client's `constants.js` hardcodes `CONTRACT_ADDRESS` and `CONTRACT_ABI`. After deployment, update `CONTRACT_ADDRESS` in every client's `constants.js` to match your deployed contract's address (and refresh `CONTRACT_ABI` if the contract interface changes).

### 3. Run a client app

Each React app is set up independently. From within the desired client directory:

```bash
npm install
npm start
```

Run each of the three clients (Employee, Supplier, Regulator) on its own port as needed.

## Typical Workflow

1. **Employee** signs up/logs in with an employee ID and submits KYC.
2. **Employee** raises a requisition for an item and quantity.
3. **Supplier** checks the employee's KYC, views the open requisition, and submits a price quotation.
4. **Employee** reviews quotations and places an order with the chosen supplier.
5. **Regulator** can view all KYC records, requisitions, quotations, and orders at any point for oversight.

## Tech Stack

- **Smart contract:** Solidity `^0.4.8`
- **Frontend:** React.js (Create React App)
- **Blockchain connectivity:** web3.js (legacy 0.x API)
- **Network:** Ethereum (designed for a local dev chain, e.g. Ganache)

## Notes & Limitations

This was built as a hackathon prototype rather than a production system:

- Uses the legacy web3.js `0.2x` API and `pragma solidity ^0.4.8`, both long deprecated — a modern setup would use web3.js `4.x`/ethers.js and Solidity `^0.8.x`.
- "Login" is really just an existence check against employee/requisition IDs stored on-chain, not real authentication.
- KYC data (employee ID, name, location) is stored in plaintext on-chain, which is not appropriate for real personally identifiable information.
- No automated tests or CI are included.

## License

Released under the [MIT License](LICENSE).
