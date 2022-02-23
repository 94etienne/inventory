import React from 'react'
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import {Close, DeleteOutline, Send} from "@material-ui/icons";

import {allAssetTypeRows} from "../../../allData";

// Delete
import { useState } from "react";

export default function ViewAssetType() {
        // Diplay data
    // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allAssetTypeRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 200 },
        // Image call
       
        { field: 'assetTypeName', headerName: 'Asset Type Name', width: 660 },
       
               
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showAssetType/"+params.row.id}>
                    <button className="userListEdit">
                        <i className="fas fa-eye text-white" />
                        </button>
                    </Link>
                    <Link to={"/editAssetType/"+params.row.id}>
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
                
                <label className="destroyedHeaderDisplay"> All Asset Types</label>
                
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
