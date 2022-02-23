import React from 'react'
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import {allDepartmentRows} from "../../allData";
import {Close, DeleteOutline, Send} from "@material-ui/icons";

// Delete
import { useState } from "react";

export default function ViewDepartment() {
         // Diplay data
    // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allDepartmentRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 200 },
        // Image call
       
        { field: 'departmentName', headerName: 'Department Name', width: 660 },
       
               
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showDepartment/"+params.row.id}>
                    <button className="userListEdit">
                        <i className="fas fa-eye text-white" />
                        </button>
                    </Link>
                    <Link to={"/editDepartment/"+params.row.id}>
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
    // End Display Data
    return (
        <div className="content-wrapper bg-white">
        <div className="viewEmployee">
              {/* DISPLAYING ASSET TYPE */}              
             
             <div className="newUserTitle text-white">         
             <>         
                 
                 <label className="destroyedHeaderDisplay"> All Department's Report</label>
                 
                  <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
                 <option value="">---Status----</option>
                     <option value="all">All</option>
                     <option value="furniture">Active</option>
                     <option value="bad">Inactive</option>
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
