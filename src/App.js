 
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';

// Link Pages
import { BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
// import Dashboard1 from './components/Dashboard1';
import AddEmployee from './components/employee/AddEmployee';
import ViewEmployee from './components/employee/ViewEmployee';
import AddNewAsset from './components/assets/AddNewAsset';
import Destroyed from './components/assets/Destroyed';
import MovementReport from './components/reports/MovementReport';
import DestroyedReport from './components/reports/DestroyedReport';
import QrCode from './components/qrcodes/QrCode';
import EditEmployee from './components/employee/EditEmployee';
import AddEmployeeAccount from './components/employee/AddEmployeeAccount';
import ViewEmployeeAccount from './components/employee/ViewEmployeeAccount';
import AddAssetType from './components/assets/AddAssetType';
import AddAssetSubType from './components/assets/AddAssetSubType';
import EditNewAsset from './components/assets/EditNewAsset';
import EditAssetSubType from './components/assets/EditAssetSubType';
import EditAssetType from './components/assets/EditAssetType';
import AssetRenting from './components/assets/AssetRenting';
import ReturnedAsset from './components/assets/ReturnedAsset';
import AddFacility from './components/assets/AddFacility';
import EditFacility from './components/assets/EditFacility';
import Maintainance from './components/assets/Maintainance';
import MaintainanceRequest from './components/assets/MaintainanceRequest';
import AddDepartment from './components/department/AddDepartment';
import EditDepartment from './components/department/EditDepartment';
import AddField from './components/field/AddField';
import EditField from './components/field/EditField';
import AddLevel from './components/level/AddLevel';
import EditLevel from './components/level/EditLevel';
import AddSupplier from './components/suppliers/AddSupplier';
import EditSupplier from './components/suppliers/EditSupplier';
import AddSector from './components/sector/AddSector';
import EditSector from './components/sector/EditSector';
import AddCustodianAsset from './components/custodiansAsset/AddCustodianAsset';
import AddAssetMovement from './components/assetMovements/AddAssetMovement';
import EditAssetMovement from './components/assetMovements/EditAssetMovement';
import AddAudit from './components/audit/AddAudit';
import EditAudit from './components/audit/EditAudit';
import AddCondition from './components/condition/AddCondition';
import EditCondition from './components/condition/EditCondition';
import ViewDepartment from './components/department/ViewDepartment';
import ViewField from './components/field/ViewField';
import ViewLevel from './components/level/ViewLevel';
import ViewSupplier from './components/suppliers/ViewSupplier';

import ViewAssetType from './components/assets/viewAssets/ViewAssetType';
import ViewAssets from './components/assets/viewAssets/ViewAssets';
import ViewAssetSubType from './components/assets/viewAssets/ViewAssetSubType';
import ReturnedAssets from './components/assets/viewAssets/ReturnedAssets';
import ViewFacility from './components/assets/viewAssets/ViewFacility';
import ViewMaintainanceRequest from './components/assets/viewAssets/ViewMaintainanceRequest';
import AllMaintainedAssets from './components/assets/viewAssets/AllMaintainedAssets';
import ViewSector from './components/sector/ViewSector';
import ViewCustodianAsset from './components/custodiansAsset/ViewCustodianAsset';
import ViewAssetMovement from './components/assetMovements/ViewAssetMovement';
import ViewAudit from './components/audit/ViewAudit';
import ViewCondition from './components/condition/ViewCondition';
import Securitydash from './components/security/SecurityDash';
import Login from './components/login/Login';
import Forgot from './components/login/Forgot';
import ShowEmployee from './components/employee/ShowEmployee';
import ShowDepartment from './components/department/ShowDepartment';
import ShowField from './components/field/ShowField';
import ShowLevel from './components/level/ShowLevel';
import ShowSupplier from './components/suppliers/ShowSupplier';
import ShowNewAsset from './components/assets/showAssets/ShowNewAsset';
import ShowAssetType from './components/assets/showAssets/ShowAssetType';
import ShowAssetSubType from './components/assets/showAssets/ShowAssetSubType';
import ShowAssetFacility from './components/assets/showAssets/ShowAssetFacility';
import ShowDestroyed from './components/assets/showAssets/ShowDestroyed';
import ShowMaintainanceRequest from './components/assets/showAssets/ShowMaintainanceRequest';
import ShowAllMaintainedAssets from './components/assets/showAssets/ShowAllMaintainedAssets';
import ShowSector from './components/sector/ShowSector';
import ShowAllCustodianAsset from './components/custodiansAsset/ShowCustodianAsset';
import ShowCondition from './components/condition/ShowCondition';
import ShowAudit from './components/audit/ShowAudit';
import ShowAssetRent from './components/assets/showAssets/ShowAssetRent';
import ShowAssetReturned from './components/assets/showAssets/ShowAssetReturned';
import ShowAssetMovement from './components/assetMovements/ShowAssetMovement';
import Excel from './components/Excel/Excel';



function App() {
  return (
    
      <Router>
      <Header/> 

    <div class="wrapper">
    <Menu/>      
    <Switch>
    <Route exact path="/login">
         {/* List of Users */}
          <Login/>
       </Route>

       <Route path="/forgot">
         {/* List of Users */}
          <Forgot/>
       </Route>

        <Route path="/Dashboard">
         {/* List of Users */}
          <Dashboard/>
       </Route>

        <Route path="/employees">
         {/* List of Users */}
       <AddEmployee/>
       </Route>
       
       
{/* Edit Employee */}
<Route path="/editEmployee/:employeeId">
         {/*Single User */}
         <EditEmployee/>
       </Route>

       
       <Route path="/addDepartment">
         {/* List of Users */}
       <AddDepartment/>
       </Route>
       <Route path="/editDepartment">
         {/* List of Users */}
       <EditDepartment/>
       </Route>

       

       <Route path="/addField">
         {/* List of Users */}
       <AddField/>
       </Route>
       <Route path="/editField">
         {/* List of Users */}
       <EditField/>
       </Route>
       

       <Route path="/addLevel">
         {/* List of Users */}
       <AddLevel/>
       </Route>
       <Route path="/editLevel">
         {/* List of Users */}
       <EditLevel/>
       </Route>


       <Route path="/supplier">
         {/* List of Users */}
       <AddSupplier/>
       </Route>
       <Route path="/editSupplier">
         {/* List of Users */}
       <EditSupplier/>
       </Route>
       <Route path="/sector">
         {/* List of Users */}
       <AddSector/>
       </Route>
       <Route path="/editSector">
         {/* List of Users */}
       <EditSector/>
       </Route>

       <Route path="/custodianAsset">
         {/* List of Users */}
       <AddCustodianAsset/>
       </Route>

       

<Route path="/employeeAcount">
         {/* List of Users */}
       <AddEmployeeAccount/>
       </Route>
       <Route path="/viewEmployeeAcount">
         {/* List of Users */}
       <ViewEmployeeAccount/>
       </Route>

       <Route path="/addNewAsset">
         {/* List of Users */}
       <AddNewAsset/>
       </Route>
       <Route path="/editNewAsset">
         {/* List of Users */}
       <EditNewAsset/>
       </Route>
       <Route path="/editAssetType">
         {/* List of Users */}
       <EditAssetType/>
       </Route>

       <Route path="/editAssetSubType">
         {/* List of Users */}
       <EditAssetSubType/>
       </Route>

       
       <Route path="/addAssetType">
         {/* List of Users */}
       <AddAssetType/>
       </Route>
       <Route path="/addAssetSubType">
         {/* List of Users */}
       <AddAssetSubType/>
       </Route>
       
       <Route path="/returnedAsset">
         {/* List of Users */}
       <ReturnedAsset/>
       </Route>
       <Route path="/addFacility">
         {/* List of Users */}
       <AddFacility/>
       </Route>
       <Route path="/editFacility">
         {/* List of Users */}
       <EditFacility/>
       </Route>

       

       
       <Route path="/assetMovement">
         {/* List of Users */}
       <AddAssetMovement/>
       </Route>

       <Route path="/assetAudit">
         {/* List of Users */}
       <AddAudit/>
       </Route>

       <Route path="/editAudit">
         {/* List of Users */}
       <EditAudit/>
       </Route>
       <Route path="/assetCondition">
         {/* List of Users */}
       <AddCondition/>
       </Route>

       <Route path="/editCondition">
         {/* List of Users */}
       <EditCondition/>
       </Route>


       
       <Route path="/EditMovement">
         {/* List of Users */}
       <EditAssetMovement/>
       </Route>
       <Route path="/destroyed">
         {/* List of Users */}
       <Destroyed/>
       </Route>
       <Route path="/maintainanceRequest">
         {/* List of Users */}
       <MaintainanceRequest/>
       </Route>
       <Route path="/maintainance">
         {/* List of Users */}
       <Maintainance/>
       </Route>


       {/* Reports */}
       <Route path="/employeesReport">
         {/* List of Users */}
       <ViewEmployee/>
       </Route>
       <Route path="/departmentreport">
         {/* List of Users */}
       <ViewDepartment/>
       </Route>
       <Route path="/fieldReport">
         {/* List of Users */}
       <ViewField/>
       </Route>
       <Route path="/levelReport">
         {/* List of Users */}
       <ViewLevel/>
       </Route>
       <Route path="/suppliersReport">
         {/* List of Users */}
       <ViewSupplier/>
       </Route>             


       <Route path="/registeredAssetReport">
         {/* List of Users */}
       <ViewAssets/>
       </Route>

       <Route path="/registeredAssetTypeReport">
         {/* List of Users */}
       <ViewAssetType/>
       </Route>
       <Route path="/registeredAssetSubTypeReport">
         {/* List of Users */}
       <ViewAssetSubType/>
       </Route>
       <Route path="/registeredFacilitiesReport">
         {/* List of Users */}
       <ViewFacility/>
       </Route>
       <Route path="/maintainceRequestReport">
         {/* List of Users */}
       <ViewMaintainanceRequest/>
       </Route>

       <Route path="/sectorReport">
         {/* List of Users */}
       <ViewSector/>
       </Route>
       <Route path="/maintainceAssetReport">
         {/* List of Users */}
       <AllMaintainedAssets/>
       </Route>

       <Route path="/custodianAssignedAssetReport">
         {/* List of Users */}
       <ViewCustodianAsset/>
       </Route>
       <Route path="/movementReport">
         {/* List of Users */}
       <ViewAssetMovement/>
       </Route>
       <Route path="/auditReport">
         {/* List of Users */}
       <ViewAudit/>
       </Route>
       <Route path="/conditionReport">
         {/* List of Users */}
       <ViewCondition/>
       </Route>
       
       
       {/* Movement of Assets */}
       <Route path="/assetRenting">
         {/* List of Users */}
       <AssetRenting/>
       </Route>
       <Route path="/allReturnedAssets">
         {/* List of Users */}
       <ReturnedAssets/>
       </Route>
       

       

      

       


       

       <Route path="/movementreport">
         {/* List of Users */}
       <MovementReport/>
       </Route>


       <Route path="/destroyedreport">
         {/* List of Users */}
       <DestroyedReport/>
       </Route>

       <Route path="/qrcodes">
         {/* List of Users */}
       <QrCode/>
       </Route>

       <Route path="/DashboardSecurity">
         {/* List of Users */}
       <Securitydash/>
       </Route>
{/* VIEW SINGLE DETAILS PAGES START */}
      <Route path="/showEmployee">
         {/* List of Users */}
       <ShowEmployee/>
       </Route>
       <Route path="/showDepartment">
         {/* List of Users */}
       <ShowDepartment/>
       </Route>

       <Route path="/showField">
         {/* List of Users */}
       <ShowField/>
       </Route>
       <Route path="/showLevel">
         {/* List of Users */}
       <ShowLevel/>
       </Route>
       <Route path="/showSupplier">
         {/* List of Users */}
       <ShowSupplier/>
       </Route>
       <Route path="/showNewAsset">
         {/* List of Users */}
       <ShowNewAsset/>
       </Route>
       <Route path="/showAssetType">
         {/* List of Users */}
       <ShowAssetType/>
       </Route>
       <Route path="/showAssetSubType">
         {/* List of Users */}
       <ShowAssetSubType/>
       </Route>
       <Route path="/showAssetFacility">
         {/* List of Users */}
       <ShowAssetFacility/>
       </Route>
       <Route path="/showDestroyed">
         {/* List of Users */}
       <ShowDestroyed/>
       </Route>
        <Route path="/showMaintainanceRequest">
         {/* List of Users */}
       <ShowMaintainanceRequest/>
       </Route>
       <Route path="/showAllMaintainedAssets">
         {/* List of Users */}
       <ShowAllMaintainedAssets/>
       </Route>
       <Route path="/showSector">
         {/* List of Users */}
       <ShowSector/>
       </Route>
       <Route path="/showCustodianAsset">
         {/* List of Users */}
       <ShowAllCustodianAsset/>
       </Route>
       <Route path="/showCondition">
         {/* List of Users */}
       <ShowCondition/>
       </Route>
       <Route path="/showAudit">
         {/* List of Users */}
       <ShowAudit/>
       </Route>
       <Route path="/showAssetRent">
         {/* List of Users */}
       <ShowAssetRent/>
       </Route>
       <Route path="/showReturnedAsset">
         {/* List of Users */}
       <ShowAssetReturned/>
       </Route>
       <Route path="/showAssetMovement">
         {/* List of Users */}
       <ShowAssetMovement/>
       </Route>

       {/* Export Excel */}
       <Route path="/exportExcel">
         {/* List of Users */}
       <Excel/>
       </Route>

             

{/* END VIEW SINGLE DETAILS PAGES START */}


        </Switch>
      
      
    </div>
    <Footer />
    </Router>
   
  );
}

export default App;
