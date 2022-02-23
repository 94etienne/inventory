import React from 'react'
import {allFieldRows} from "../../allData";
import { DataGrid } from '@mui/x-data-grid';
// Delete
import { useState } from "react";
import {Close, DeleteOutline, Send} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function ViewField() {
          // Diplay data
    // Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allFieldRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 200 },
        // Image call
       
        { field: 'fieldName', headerName: 'Field Name', width: 660 },
       
               
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showField/"+params.row.id}>
                    <button className="userListEdit">
                        <i className="fas fa-eye text-white" />
                        </button>
                    </Link>
                    <Link to={"/editField/"+params.row.id}>
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
        <div className=" viewEmployee">
       {/* DISPLAYING ASSET TYPE */}
                    
       <div className="newUserTitle text-white">         
       <>         
           
           <label className="destroyedHeaderDisplay"> All Fields</label>
           
                          
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
