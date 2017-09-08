// constant file to provide update on CONTRACT_ADSRESS & CONTRACT_ABI

export const CONTRACT_ADDRESS = '0x6ea9eaade74ec6d8110e63cd67b17e6470b75a61'
export const CONTRACT_ABI = [{"constant":false,"inputs":[{"name":"_empId","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"signup","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"req_admins","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"admins","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"requisition","outputs":[{"name":"empId","type":"uint256"},{"name":"requisitionId","type":"uint256"},{"name":"qty","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"order","outputs":[{"name":"requisitionId","type":"uint256"},{"name":"vendor","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"empId","type":"uint256"}],"name":"login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"req_supplier_order_admins","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_orders","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_requisitionId","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_vendor","type":"bytes32"}],"name":"place_quotes","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_requisitionId","type":"uint256"}],"name":"req_login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_quotations","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_empId","type":"uint256"},{"name":"_requisitionId","type":"uint256"},{"name":"_qty","type":"uint256"}],"name":"place_requisition","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_requisitionId","type":"uint256"},{"name":"_vendor","type":"bytes32"}],"name":"place_orders","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_empId","type":"uint256"},{"name":"_name","type":"bytes32"},{"name":"_location","type":"bytes32"}],"name":"do_KYC","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"empId","type":"uint256"}],"name":"getKYCforEmployee","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_requisitionId","type":"uint256"},{"name":"_empId","type":"uint256"}],"name":"req_signup","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_requisitionId","type":"uint256"}],"name":"req_supplier_order_login","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_RequisitionDetails","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getKYC","outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"kyc","outputs":[{"name":"empId","type":"uint256"},{"name":"name","type":"bytes32"},{"name":"location","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quote","outputs":[{"name":"requisitionId","type":"uint256"},{"name":"price","type":"uint256"},{"name":"vendor","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get_maxRequisitionNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_requisitionId","type":"uint256"},{"name":"_supplier","type":"bytes32"}],"name":"req_supplier_order_signup","outputs":[],"payable":false,"type":"function"}]
