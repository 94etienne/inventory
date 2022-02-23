import React from 'react'
// Delete
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

// Icons
import {DeleteOutline} from "@material-ui/icons";

import {allAssetRows} from "../../../allData";
import { Link } from 'react-router-dom';

import { Send, Close } from "@material-ui/icons";

export default function ViewAssets() {
    // Diplay Data
 // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allAssetRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
        // Image call
        { field: 'assetDescription', headerName: 'Description', width: 250, renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.assetDescription}
                </div>
            )
            //End  Image call
        } },
        { field: 'acquisitionValue', headerName: 'Acquisition_Value', width: 230 },
       
        {
            field: 'assetCode',
            headerName: 'Code',
            width: 180,
          },
          {
            field: 'note',
            headerName: 'Note',
            width: 120,
          },
          {
            field: 'receivedYear',
            headerName: 'Year',
            width: 120,
          },
          {
            field: 'assetSubType',
            headerName: 'Sub Type',
            width: 150,
          },
          {
            field: 'assetFacility',
            headerName: 'Facility',
            width: 150,
          },
          {
            field: 'supplier',
            headerName: 'Supplier',
            width: 200,
          },
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showNewAsset/"+params.row.id}>
                    <button className="userListEdit">
                        <i className="fas fa-eye text-white" />
                        </button>
                    </Link>
                    <Link to={"/editNewAsset/"+params.row.id}>
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
         {/* DISPLAYING ASSET */}
            
         <div className="newUserTitle text-white">         
            <>               
                
                <label className="destroyedHeaderDisplay"> All Assets</label>
                
                <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
                <option value="">---Asset Owner----</option>
                    <option value="all">All</option>
                    <option value="furniture">Campus</option>
                    <option value="Employee">Employee</option>
                    <option value="Student">Student</option>
                </select>

                <select name="assetType" id="assetSupplier" className="newUserSelectDisplay">
                <option value="">---Supplier----</option>
                    <option value="all">All</option>
                    <option value="Fulgence">Fulgence</option>
                    <option value="Pauline">Pauline</option>
                    
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
            <DataGrid className="dataGrid" rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection/>

                  {/* Footer Call */}
                  <div className="footerHeight1">
               <hr />
                           
           </div>
        </div>
        </div>
    )
}
