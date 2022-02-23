import React from 'react'
import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';
import {facilityRows} from "../../../allData";
// Icons
import {Close, DeleteOutline, Send} from "@material-ui/icons";

// Delete
import { useState } from "react";

export default function ViewFacility() {
            // Diplay data
    // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(facilityRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 150 },
          // Image call
          { field: 'facilityName', headerName: 'Facility Name', width: 200, renderCell:(params)=>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    {params.row.facilityName}
                </div>
            )
            //End  Image call
        } },
       
        
        { field: 'facilityDesc', headerName: 'Facility Description', width: 400 },
       
               
          
          {
            field: 'action',
            headerName: 'Action',
            width: 250,
            
            renderCell: (params)=>{
                return(
                    <>
                     <Link to={"/showAssetFacility/"+params.row.id}>
                    <button className="userListEdit">
                        <i className="fas fa-eye text-white" title="View" />
                        </button>
                    </Link>
                    <Link to={"/editFacility/"+params.row.id}>
                    <button className="userListEdit">
                        <i className="fas fa-edit text-warning" title="Edit" />
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
             <h1 className="newUserTitle text-center text-white">All Campus Facilities</h1>
            <DataGrid className="dataGrid" rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection/>


            {/* Footer Call */}
            <div className="footerHeight1">
               <hr />
                           
           </div>
            
        </div>
        </div>
    )
}
