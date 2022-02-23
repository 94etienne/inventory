import React from 'react'

import { useState } from "react";
import {employeeRows} from "../../allData";
import {DeleteOutline} from "@material-ui/icons";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";


export default function ViewEmployee() {

// Display Employee
 // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(employeeRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
         // Image call
         { field: 'user', headerName: 'Full Name', width: 250, renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.fullName}
                </div>
            )
            //End  Image call
        } },
        { field: 'username', headerName: 'Username', width: 230 },
      
        
       
        { field: 'nid', headerName: 'NID', width: 230 },
        
        {
            field: 'email',
            headerName: 'Email',
            width: 230,
          },
          {
            field: 'phone',
            headerName: 'Phone',
            width: 120,
          },
       
        {
            field: 'status',
            headerName: 'Status',
            width: 180,
          },
         
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showEmployee/"+params.row.id}>
                    <button className="userListEdit bg-info" title="View">
                        <i className="fas fa-eye text-white" />
                        </button>
                    </Link>

                    <Link to={"/editEmployee/"+params.row.id}>
                    <button className="userListEdit bg-info">
                        <i className="fas fa-edit text-warning" />
                        </button>
                    </Link>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  
                    <DeleteOutline  className="userListDelete text-danger" onClick={()=>handleDelete(params.row.id)}/>
                    </>
                )
            }
          },
      
      ];
      

// End DISPLAY EMPLOYEE

    return ( 
        <div className="content-wrapper bg-white">
        <div className=" viewEmployee ">
            
            <div className="newUserTitle text-white bg-info">         
            <>               
                
                <label className="destroyedHeaderDisplay"> All Regidtered Employees</label>
                
                <select name="assetType" id="assetSubType" className="newUserSelectDisplay1">
                <option value="">---Select Depart ----</option>
                    <option value="all">All</option>
                    <option value="depart">FINANCE</option>
                    <option value="depart">ICT</option>
                </select>
                <select name="assetType" id="assetSubType" className="newUserSelectDisplay1">
                <option value="">---Select Field ----</option>
                    <option value="all">All</option>
                    <option value="field">Computer cience</option>
                    <option value="field">IS</option>
                </select>
                <select name="assetType" id="assetSubType" className="newUserSelectDisplay1">
                <option value="">---Select Level ----</option>
                    <option value="all">All</option>
                    <option value="level">Professor</option>
                    <option value="level">PHD</option>
                </select>

                
                
                    <input type="text" className="search" placeholder="search.........." />
                
                </>
            
            
             </div>
           
           <DataGrid className="dataGrid" rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection/>
          
         {/* Footer Call */}
       <div className="footerHeight1">
          <hr />
                      
      </div>
        </div>
        </div>
       
    )
}
