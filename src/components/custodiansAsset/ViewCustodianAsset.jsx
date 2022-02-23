import React from 'react'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

// Icons
import {DeleteOutline} from "@material-ui/icons";

import {allcustodianRows} from "../../allData";
// Delete
import { useState } from "react";

export default function ViewCustodianAsset() {
        // Diplay Data
 // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allcustodianRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
      
        { field: 'empNid', headerName: 'Employee NID', width: 230 },
       
        {
            field: 'empName',
            headerName: 'Employee Name',
            width: 230,
          },
          {
            field: 'assetCode',
            headerName: 'Asset Code',
            width: 180,
          },
          {
            field: 'assetName',
            headerName: 'Asset Name',
            width: 180,
          },
          {
            field: 'from',
            headerName: 'From',
            width: 150,
          },
          {
            field: 'to',
            headerName: 'To',
            width: 150,
          },
          {
            field: 'recordedBy',
            headerName: 'Recorded By',
            width: 150,
          },
          
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showCustodianAsset/"+params.row.id}>
                    <button className="userListEdit bg-success">
                        <i className="fas fa-eye text-white"/>
                        </button>
                    </Link>
                    <Link to={"/custodianAssignedAssetReport/"+params.row.id}>
                    <button className="userListEdit bg-success">
                        ReAssign Asset
                        </button>
                    </Link>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  
                    {/* <DeleteOutline  className="userListDelete text-danger" onClick={()=>handleDelete(params.row.id)}/> */}
                   
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
            
            <label className="destroyedHeaderDisplay"> All Asset's assigned to custodian</label>
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
