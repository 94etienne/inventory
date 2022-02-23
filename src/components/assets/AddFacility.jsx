import React from 'react'
// Icons
import {Close, DeleteOutline, Send} from "@material-ui/icons";

export default function AddFacility() {

    return (
        <div className="content-wrapper bg-white">
              <div className="addAssetType">
            <h3 className="newUserTitle text-center text-white">Add New Facility</h3>
            <form className="newUserForm">
            <div className="newUserItem">
                    <label>Facility/Building Name</label>
                    <input type="text" placeholder="Muhabura" name="facilityName" id="facilityName" required />
                </div>

                <div className="newUserItem">
                    <label>Facility/Building Description</label>
                    
                    <textarea name="facilityDesc" id="facilityDesc"  placeholder="Laboratory"  cols="30" rows="10"></textarea>
                </div>
            
                
                
               
                
               {/* <div className="buttons">                */}
                <button className="newUserButton bg-primary"><Send className="text-warning"/> Add</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button>
                 */}
                {/* </div> */}
            </form>
            
            </div>
            
        </div>
    )
}
