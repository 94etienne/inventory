import React from 'react'


// Icons
import {Close, DeleteOutline, Send} from "@material-ui/icons";



export default function AddLevel() {

    return (
        <div className="content-wrapper bg-white">
        <div className="addAssetType">

            <h3 className="newUserTitle text-center bg-info text-white">Adding  Level (Qualification) </h3>
            <form className="newUserForm">
            <div className="newUserItem">
                    <label>Level (Qualification) Name</label>
                    <input type="text" placeholder="Professor" name="levelName" id="levelName" required />
                </div>
            
                
                
               
                
               {/* <div className="buttons">                */}
                <button className="newUserButton bg-info"><Send className="text-warning"/> Add</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
                {/* </div> */}
            </form>

            </div>
        </div>
    )
}
