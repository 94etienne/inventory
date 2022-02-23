import React from 'react'


// Icons
import {Close, DeleteOutline, Send} from "@material-ui/icons";


export default function AddSector() {

    return (
        <div className="content-wrapper bg-white">
        <div className="addAssetType">
            <h1 className="newUserTitle text-center text-white">Adding  Sector .....</h1>
            <form className="newUserForm">
            <div className="newUserItem">
                    <label>Sector Name</label>
                    <input type="text" placeholder="Public" name="sectorName" id="sectorName" required />
                </div>
            
                
                
               
                
               {/* <div className="buttons">                */}
                <button className="newUserButton bg-primary"><Send className="text-warning"/> Add</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
                {/* </div> */}
            </form>
            
            </div>
        </div>
    )
}
