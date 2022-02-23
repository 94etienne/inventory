import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

// Icons
import {allAssetRentedRows} from "../../allData";
import { Link } from 'react-router-dom';


// Delete
import { useState } from "react";


export default function AssetRenting() {
// Display Rented Data
// Delete Data
    // userData===== From dummyData File
    const [data,setData] = useState(allAssetRentedRows)

    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id != id)) ;
    };

    // Delete Data


    const columns = [
        { field: 'id', headerName: 'No', width: 100 },
        
      
        { field: 'assetName', headerName: 'Asset Name', width: 230 },
               
       
        {
            field: 'assetCode',
            headerName: 'Code',
            width: 180,
          },
          {
            field: 'assetType',
            headerName: 'Asset Type',
            width: 230,
          },
          {
            field: 'acquisitionValue',
            headerName: 'Acquisition Value',
            width: 230,
          },
          {
            field: 'borrower',
            headerName: 'Borrower',
            width: 150,
          },
          {
            field: 'date',
            headerName: 'Rented Date',
            width: 230,
          },
        
          
          {
            field: 'action',
            headerName: 'Action',
            width: 150,
            
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={"/showAssetRent/"+params.row.id}>
                    <button className="return bg-primary">
                      <i  className="fas fa-eye text-white"/>
                    </button>
                   
                    </Link> 
                    <Link to={"/returnedAsset/"+params.row.id}>
                    <button className="return bg-primary">Return</button>
                   
                    </Link>  
                    
                 
                    </>
                )
            }
          },
      
      ];




// End of Display Rented Data



    return (
        <div className="content-wrapper  bg-white">
          <div className="viewEmployee">
          <div className="newUserTitle text-white">         
            <>               
                
                <label className="destroyedHeaderDisplay">All Asset's Rented</label>
                
                <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
                <option value="">---Asset sub Type----</option>
                    <option value="all">All</option>
                    <option value="Laptop">Laptop</option>
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

           
            

            
{/* Footer */}
<div className="footerHeight1">
               <hr />
                           
           </div>
           </div>
        </div>
    )
}
