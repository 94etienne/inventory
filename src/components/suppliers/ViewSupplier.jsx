import React from 'react'
import { useState } from "react";
import {supplierRows} from "../../allData";
import {DeleteOutline} from "@material-ui/icons";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { Send, Close } from "@material-ui/icons";

export default function ViewSupplier() {
        // Display Employee
 // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(supplierRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
     
        { field: 'fullname', headerName: 'Full Name', width: 230 },
      
        
       
        { field: 'nid', headerName: 'NID', width: 230 },
        { field: 'tin', headerName: 'tin', width: 230 },
        
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
            field: 'supplierTitle',
            headerName: 'Supplier Title ',
            width: 230,
          },

          {
            field: 'sector',
            headerName: 'Sector ',
            width: 120,
          },
       
        {
            field: 'condition',
            headerName: 'Condition',
            width: 180,
          },
         
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showSupplier/"+params.row.id}>
                    <button className="userListEdit">
                        <i className="fas fa-eye text-white" />
                        </button>
                    </Link>
                    <Link to={"/editSupplier/"+params.row.id}>
                    <button className="userListEdit">
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
        <div className=" viewEmployee">

              {/* DISPLAYING ASSET */}
      
      <div className="newUserTitle text-white">         
        <>               
            
            <label className="destroyedHeaderDisplay"> All Suppliers</label>
            
            <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
            <option value="">---Select Sector ----</option>
                <option value="all">All</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
            </select>
           
            

            <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
            <option value="">---Condition----</option>
                <option value="all">All</option>
                <option value="furniture">Active</option>
                <option value="bad">Inactive</option>
            </select>
            
                <input type="text" className="search" placeholder="search.........." />
            
            </>
        
        
         </div>
       
       <DataGrid className="dataGrid" rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection/>
       
       <div className="footerHeight1">
           <hr />
                       
       </div>
       {/* Fotter Call */}
       {/* <Footer /> */}

            </div>
            </div>
    )
}
