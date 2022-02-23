import React from 'react'

// Delete
import { useState } from "react";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

// Icons
import {DeleteOutline} from "@material-ui/icons";

import {allMovementRows} from "../../allData";

export default function ViewAssetMovement() {
          // Diplay Data
 // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allMovementRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
      
        { field: 'custodianNid', headerName: 'Custodian NID', width: 230 },
       
        {
            field: 'custodianName',
            headerName: 'Custodian Name',
            width: 230,
          },
          {
            field: 'AssetType',
            headerName: 'Asset Type',
            width: 230,
          },
          {
            field: 'assetName',
            headerName: 'Asset Name',
            width: 230,
          },
          {
            field: 'movementReason',
            headerName: 'Movement Reason',
            width: 250,
          },
          {
            field: 'date',
            headerName: 'Date',
            width: 250,
          },
          {
            field: 'receivedBy',
            headerName: 'Received By',
            width: 180,
          },
          
          {
            field: 'recordedBy',
            headerName: 'Recorded By',
            width: 180,
          },
          
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showAssetMovement/"+params.row.id}>
                    <button className="userListEdit bg-success">
                        <i className="fas fa-eye text-white" ></i>
                        </button>
                    </Link>
                     <Link to={"/EditMovement/"+params.row.id}>
                    <button className="userListEdit bg-success">
                        <i className="fas fa-edit text-warning" ></i>
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
        <div className="content-wrapper  bg-white">
        <div className="viewEmployee">
          {/* DISPLAYING ASSET */}

          <div className="newUserTitle text-white">         
          <>               
              
              <label className="destroyedHeaderDisplay"> Movements of Assets</label>
              <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
                  <option value="">---Condition----</option>
                      <option value="all">All</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
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
