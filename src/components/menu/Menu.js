import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Menu extends Component {
    render() {
        return (
            <div>
               <aside className="main-sidebar sidebar-dark-primary bg-info elevation-4">
    {/* Brand Logo */}
    <Link to="/Dashboard" className="brand-link">
      <img src="dist/img/ur.png" alt="UR Logo" className="brand-image elevation-0" style={{opacity: '.8', height:"100%"}} />
      <span className="brand-text font-weight-bold text-white">OIMS</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/etienno.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <Link to="/Dashboard" className="d-block">Ntambara Etienne</Link>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}

                 <li className="nav-item">
              <Link to="/Dashboard" className="nav-link bg-white active">
               
                  <i className="fas fa-home"/>
                  <p> &nbsp; Dashboard</p>
                  </Link>
                
              </li>


          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fas fa-cog" />
              <p>
                Employee Settings
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">

                     
              <li className="nav-item">
              <Link to="/employees" className="nav-link text-white">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Add Employee</p>
                  </Link>
                
              </li>

                     
              <li className="nav-item">
              <Link to="/exportExcel" className="nav-link text-white">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Print Excel</p>
                  </Link>
                
              </li>
              
              
              <li className="nav-item">
              <Link to="/addDepartment" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Department</p>
                  </Link>
              </li>

              <li className="nav-item">
              <Link to="/addField" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Field</p>
                  </Link>
              </li>

              <li className="nav-item">
              <Link to="/addLevel" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Level</p>
                  </Link>
              </li>
              
              <li className="nav-item">
              <Link to="/supplier" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Supplier</p>
                  </Link>
              </li>
            </ul>
          </li>

         

          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fas fa-cog" />
              <p>
               Asset Settings
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
           
              <li className="nav-item">
              <Link to="/addNewAsset" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Add Asset</p>
                  </Link>
                
              </li>

              <li className="nav-item">
              <Link to="/addAssetType" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Add Asset Type</p>
                  </Link>
                
              </li>

              <li className="nav-item">
              <Link to="/addAssetSubType" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Add Asset Sub Type</p>
                  </Link>
                
              </li>

              <li className="nav-item">
              <Link to="/addFacility" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Add Facility</p>
                  </Link>
                
              </li>

              
              <li className="nav-item">
              <Link to="/sector" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Add Sector</p>
                  </Link>
                
              </li>
              <li className="nav-item">
              <Link to="/custodianAsset" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Assign to Custodian</p>
                  </Link>
                
              </li>
              <li className="nav-item">
              <Link to="/assetMovement" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Movement</p>
                  </Link>
                
              </li>
              
              <li className="nav-item">
              <Link to="/assetAudit" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Audit</p>
                  </Link>                
              </li>
              <li className="nav-item">
              <Link to="/assetCondition" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Condition</p>
                  </Link>                
              </li>


            </ul>
          </li>


          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fa fa fa-file" />
              <p>
                Employees Reports
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
           
              <li className="nav-item">
              <Link to="/employeesReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Employees</p>
                  </Link>
                
              </li>
              
              
              <li className="nav-item">
              <Link to="/departmentreport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Department</p>
                  </Link>
              </li>
              
              <li className="nav-item">
              <Link to="/fieldReport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Field</p>
                  </Link>
              </li>
                
              <li className="nav-item">
              <Link to="/levelReport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level</p>
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/suppliersReport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Suppliers</p>
                  </Link>
              </li>
            </ul>
          </li>

            

          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fa fa fa-file" />
              <p>
                Assets Reports
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
           
              <li className="nav-item">
              <Link to="/registeredAssetReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>All Assets</p>
                  </Link>
                
              </li> 

                 <li className="nav-item">
              <Link to="/registeredAssetTypeReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Asset Type</p>
                  </Link>
                
              </li> 

                <li className="nav-item">
              <Link to="/registeredAssetSubTypeReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Asset Sub Type</p>
                  </Link>
                
              </li> 
              <li className="nav-item">
              <Link to="/registeredFacilitiesReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>All Facilities</p>
                  </Link>
                
              </li> 
              <li className="nav-item">
              <Link to="/destroyed" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>All Destroyed</p>
                  </Link>
                
              </li>

               <li className="nav-item">
              <Link to="/maintainceRequestReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>All Maintainance Request</p>
                  </Link>
                
              </li>
              <li className="nav-item">
              <Link to="/maintainceAssetReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>All Maintained Asset</p>
                  </Link>
                
              </li> 
              <li className="nav-item">
              <Link to="/sectorReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>All Sectors</p>
                  </Link>
                
              </li>  

              <li className="nav-item">
              <Link to="/custodianAssignedAssetReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Custodian's Assigned</p>
                  </Link>                
              </li> 
              
              <li className="nav-item">
              <Link to="/conditionReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Codition</p>
                  </Link>                
              </li> 
              <li className="nav-item">
              <Link to="/auditReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Audit</p>
                  </Link>                
              </li> 
            
                  
                             
              
            </ul>
          </li>

          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fa fa fa-file" />
              <p>
                 Movement Reports
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
           
              <li className="nav-item">
              <Link to="/assetRenting" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Rent </p>
                  </Link>
                
              </li> 
              <li className="nav-item">
              <Link to="/allReturnedAssets" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Returned </p>
                  </Link>
                
              </li> 
              <li className="nav-item">
              <Link to="/movementReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Movement</p>
                  </Link>                
              </li>                                       
              
            </ul>
          </li>

                  
          <li className="nav-item">
            <Link to="qrcodes" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                QR Codes
                <span className="right badge badge-danger">25</span>
              </p>
            </Link>
          </li>


          {/* HR */}

          <li className="nav-item">
              <Link to="/Dashboard" className="nav-link bg-white active">
               
                  <i className="fas fa-home"/>
                  <p> &nbsp; Dashboard HR</p>
                  </Link>
                
              </li>


          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fas fa-cog" />
              <p>
                 Settings
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">

                     
              <li className="nav-item">
              <Link to="/employees" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Add Employee</p>
                  </Link>
                
              </li>
              
              
              <li className="nav-item">
              <Link to="/addDepartment" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Department</p>
                  </Link>
              </li>

              <li className="nav-item">
              <Link to="/addField" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Field</p>
                  </Link>
              </li>

              <li className="nav-item">
              <Link to="/addLevel" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Level</p>
                  </Link>
              </li>
              
              <li className="nav-item">
              <Link to="/supplier" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Supplier</p>
                  </Link>
              </li>
            </ul>
          </li>


          
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fa fa fa-file" />
              <p>
                 Reports
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
           
              <li className="nav-item">
              <Link to="/employeesReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Employees</p>
                  </Link>
                
              </li>
              
              
              <li className="nav-item">
              <Link to="/departmentreport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Department</p>
                  </Link>
              </li>
              
              <li className="nav-item">
              <Link to="/fieldReport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Field</p>
                  </Link>
              </li>
                
              <li className="nav-item">
              <Link to="/levelReport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level</p>
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/suppliersReport" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Suppliers</p>
                  </Link>
              </li>
            </ul>
          </li>


          {/* END HR */}


          


          {/* IT */}

          <li className="nav-item">
              <Link to="/Dashboard" className="nav-link bg-white active">
               
                  <i className="fas fa-home"/>
                  <p> &nbsp; Dashboard IT</p>
                  </Link>
                
              </li>


          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fas fa-cog" />
              <p>
                 Settings
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">

                     
              <li className="nav-item">
              <Link to="/employeesReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Employees</p>
                  </Link>
                
              </li>
               
              
              <li className="nav-item">
              <Link to="/employeeAcount" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Account</p>
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/viewEmployeeAcount" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Accounts</p>
                  </Link>
              </li>

            </ul>
          </li>

          {/* END IT */}

          {/* CUSTODIAN */}
          <li className="nav-item">
              <Link to="/Dashboard" className="nav-link bg-white active">
               
                  <i className="fas fa-home"/>
                  <p> &nbsp; Dashboard CUSTODIAN</p>
                  </Link>
                
              </li>


          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fas fa-cog" />
              <p>
                 Settings
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">

                     
              <li className="nav-item">
              <Link to="/custodianAssignedAssetReport" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Assigned Assets</p>
                  </Link>
                
              </li>
               
             

            </ul>
          </li>


          {/* END CUSTODIAN */}

          {/* security guard */}

          <li className="nav-item">
              <Link to="/DashboardSecurity" className="nav-link bg-white active">
               
                  <i className="fas fa-home"/>
                  <p> &nbsp; Dashboard Security</p>
                  </Link>
                
              </li>


          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fas fa-cog" />
              <p>
                 Settings
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">

                     
              <li className="nav-item">
              <Link to="/DashboardSecurity" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Check Asset</p>
                  </Link>
                
              </li>

              <li className="nav-item">
              <Link to="/employees" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Register User</p>
                  </Link>
                
              </li> 
              </ul>
          </li>


          {/* end security guard */}

          {/* LAB MANAGER */}


          
          <li className="nav-item">
              <Link to="/registeredFacilitiesReport" className="nav-link bg-white active">
               
                  <i className="fas fa-home"/>
                  <p> &nbsp; Dashboard Lab Manager</p>
                  </Link>
                
              </li>


          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link bg-white active">
              <i className="nav-icon fas fa-cog" />
              <p>
                 Settings
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">

                     
              <li className="nav-item">
              <Link to="/DashboardSecurity" className="nav-link">
               
                  <i className="far fa-circle nav-icon" />
                  <p>Managed Assets</p>
                  </Link>
                
              </li>

              
              </ul>
          </li>

          {/* END LAB MANAGER */}

            

    
        


          <li className="nav-item has-treeview menu-open">
            <Link to="/logout" className="nav-link bg-danger">
             
              <i className="nav-icon fas fa-sign-out-alt mr-2" />
              <p>
              Logout
              
              </p>
            </Link></li>

       
         
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
            </div>
        )
    }
}
