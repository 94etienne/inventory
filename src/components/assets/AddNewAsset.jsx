import React from 'react'
import { Link } from 'react-router-dom';

import { Send, Close } from "@material-ui/icons";
export default function AddNewAsset() {






    return (
        <div className="content-wrapper  bg-white">
            <div className="addNewAsset">
     
        <h3 className="newUserTitle text-center text-white">Adding New Asset </h3>
                    <form className="newUserForm">
                    <div className="newUserItem">
                            <label>Asset Description</label>
                            <input type="text" placeholder="Laptop" name="assetDesc" id="assetDesc" />
                        </div>
                        <div className="newUserItem">
                            <label>Acquisition Value</label>
                            <input type="text" placeholder="value" name="acquisitionValue" id="acquisitionValue"
                             onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}maxlength="16" 
                             pattern=".{16}" title="16 numbers"  />
                        </div>
                        <div className="newUserItem">
                            <label>Asset Code</label>
                            <input type="text" placeholder="code" name="assetCode" id="assetCode" />
                        </div>
                        <div className="newUserItem">
                            <label>Manufacture</label>
                            <input type="text" placeholder="Manufscture" name="assetManufacture" id="assetManufacture" />
                        </div>
                        <div className="newUserItem">
                            <label>Brand</label>
                            <input type="text" placeholder="Brand" name="assetBrand" id="assetBrand" />
                        </div>
                        <div className="newUserItem">
                            <label>Model</label>
                            <input type="text" placeholder="Model" name="assetModel" id="assetModel" />
                        </div>
                        <div className="newUserItem">
                            <label>Note</label>
                            <input type="text" placeholder="Note" name="assetNote" id="assetNote" />
                        </div>
                        <div className="newUserItem">
                            <label>Received Year</label>
                            <input type="date" placeholder="Note" name="reaceivedYear" id="reaceivedYear" />
                        </div>
                 
        
                        <div className="newUserItem">
                        <label>Asset Sub_Type</label>
                        <select name="assetSubType" id="assetSubType" className="newUserSelect">
                        <option value="">---Asset Sub Type----</option>
                            <option value="laptop">Laptop</option>
                            <option value="othedesktoprs">Desktop</option>
                        </select>
                        </div>
        
                        <div className="newUserItem">
                        <label>Asset Facility</label>
                        <select name="assetFacility" id="assetFacility" className="newUserSelect">
                            <option value="">---Facility----</option>
                            <option value="Muhabura">Buhabura</option>
                            <option value="others">Others</option>
                        </select>
                        </div>


                        <div className="newUserItem">
                        <label>Supplier Name</label>
                        <select name="assetSubType" id="assetSubType" className="newUserSelect">
                        <option value="">---Supplier----</option>
                            <option value="suplier">Fulgence</option>
                            <option value="suplier">Pauline</option>
                        </select>
                        </div>
        
                      
                        <div className="newUserItem">
                            <label>Photo </label>
                            <input type="file" placeholder="Etienne Ntambara" />
                        </div>
                        
                        
                       
                        
                       {/* <div className="buttons">                */}
                       <button className="newUserButton bg-primary"><Send className="text-warning"/> Add</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
                        {/* </div>  */}
                    </form>
                    
              
              </div>
        </div>
    )
}
