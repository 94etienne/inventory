import React from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

// Icons
import {DeleteOutline} from "@material-ui/icons";

import {allDestroyedAssetRows} from "../../../allData";
// Delete
import { useState } from "react";

export default function ViewMaintainance() {
                   
// Diplay Data
 // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allDestroyedAssetRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
        // Image call
        { field: 'assetName', headerName: 'Asset Name', width: 250, renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.assetName}
                </div>
            )
            //End  Image call
        } },
        { field: 'assetCode', headerName: 'Asset Code', width: 230 },
       
        {
            field: 'assetType',
            headerName: 'Asset Type',
            width: 180,
          },
          {
            field: 'acquisitionValue',
            headerName: 'Acquisition Value',
            width: 230,
          },
          {
            field: 'netBookValue',
            headerName: 'Net Book Value',
            width: 230,
          },
          {
            field: 'depreciation',
            headerName: 'Depreciation',
            width: 180,
          },
          {
            field: 'estimatedSaleValue',
            headerName: 'estimated Sale Value',
            width: 230,
          },
          {
            field: 'disposalMethod',
            headerName: 'Disposal Method',
            width: 230,
          },
          {
            field: 'reportedOn',
            headerName: 'Reported On',
            width: 230,
          },
          {
            field: 'reportedBy',
            headerName: 'Reported By',
            width: 230,
          },
          
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showMaintainanceRequest/"+params.row.id}>
                    <button className="userListEdit">
                       <i className="fas fa-eye text-white"/>
                        </button>
                    </Link>
                    <Link to={"/maintainance/"+params.row.id}>
                    <button className="userListEdit">
                        Repair Asset
                        </button>
                    </Link>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  
                                    
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
           
           <label className="destroyedHeaderDisplay"> Asset's Maintainance Request</label>
           
           <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
           <option value="">---Asset Type----</option>
               <option value="all">All</option>
               <option value="furniture">Furniture</option>
               <option value="others">other</option>
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
