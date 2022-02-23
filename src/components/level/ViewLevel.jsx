import React from 'react'
import { Link } from 'react-router-dom';
import {Close, DeleteOutline, Send} from "@material-ui/icons";

import { DataGrid } from '@mui/x-data-grid';
import {allLevelRows} from "../../allData";

// Delete
import { useState } from "react";

export default function ViewLevel() {
        // Diplay data
    // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allLevelRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 200 },
        // Image call
       
        { field: 'levelName', headerName: 'Level (Qualification) Name', width: 660 },
       
               
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showLevel/"+params.row.id}>
                    <button className="userListEdit bg-info">
                        <i className="fas fa-eye text-white" />
                        </button>
                    </Link>
                    <Link to={"/editLevel/"+params.row.id} >
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
    // End Display Data
    return (
        <div className="content-wrapper bg-white">
        <div className="addAssetType">


                         {/* DISPLAYING ASSET TYPE */}
                       
             
             <div className="newUserTitle text-white bg-info">         
             <>         
                 
                 <label className="destroyedHeaderDisplay"> All Level (Qualification)</label>
                 
                                
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
