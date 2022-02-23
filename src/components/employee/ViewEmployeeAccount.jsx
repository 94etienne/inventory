import React from 'react'

import { DataGrid } from '@mui/x-data-grid';



import {employeeAccountRows} from "../../allData";

// Delete
import { useState } from "react";
import { Link } from 'react-router-dom';






export default function ViewEmployeeAccount() {
   
// Displaying Employee Account
// Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(employeeAccountRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
        // Image call
        { field: 'user', headerName: 'Username', width: 250, renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
            //End  Image call
        } },
        { field: 'email', headerName: 'Email', width: 230 },
        {
            field: 'position',
            headerName: 'Role',
            width: 230,
          },
        {
            field: 'status',
            headerName: 'Status',
            width: 180,
          },
         
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params)=>{
                return(
                    <>
                <Link to="viewEmployeeAcount">
                <select name="activate" id="activate" className="newUserSelect bg-success">
                    <option value="activate">Activate</option>
                    <option value="deactivate">Deactivate</option>
                    </select>
                    </Link>
                    </>
                )
            }
          },
      
      ];
      



// End of Displaying Employee Account


    return (
        <div className="content-wrapper bg-white">
        <div className="viewEmployeeAccount">

                  {/* DISPLAYING ASSET */}
          
                  <div className="newUserTitle text-white">         
            <>               
                
                <label className="destroyedHeaderDisplay"> All Employee's Accounts</label>
                
                <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
                <option value="">---Employee Account----</option>
                    <option value="all">All</option>
                    <option value="furniture">HR</option>
                    <option value="IT">IT</option>
                    <option value="IT">Asset Manager</option>
                </select>

                <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
                <option value="">---Condition----</option>
                    <option value="all">All</option>
                    <option value="furniture">Good</option>
                    <option value="bad">Bad</option>
                </select>
                
                    <input type="text" className="search" placeholder="search.........." />
                
                </>
            
            
             </div>
           
           <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection/>
            {/* Footer Call */}
            <div className="footerHeight1">
                <hr />
                            
            </div>
        </div>
        </div>
    )
}
