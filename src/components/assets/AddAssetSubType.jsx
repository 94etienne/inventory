import React from 'react'

import { Send } from '@material-ui/icons';
export default function AddAssetSubType() {  
    return (
        <div className="content-wrapper  bg-white">
            <div className="assetSubType">
              <h3 className="newUserTitle text-center text-white">Adding  Asset Type </h3>
            <form className="newUserForm">
            
                <div className="newUserItem">
                <label>Asset Type</label>
                <select name="assetType" id="assetSubType" className="newUserSelect">
                <option value="">---Asset Type----</option>
                    <option value="furniture">Furniture</option>
                    <option value="others">other</option>
                </select>
                </div>
                <div className="newUserItem">
                    <label>Asset Sub Type Name</label>
                    <input type="text" placeholder="Laptop" name="assetType" id="assetType" required />
                </div>
                
                
               
                
               {/* <div className="buttons">                */}
               <button className="newUserButton bg-primary"><Send className="text-warning"/> Add</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button>
                </div> */}
            </form>

            </div>
        </div>
    )
}
