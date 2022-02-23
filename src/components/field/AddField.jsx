import React from 'react'

// Icons
import {Close, DeleteOutline, Send} from "@material-ui/icons";



export default function AddField() {

    return (
        <div className="content-wrapper bg-white">
        <div className="addAssetType">
            <h3 className="newUserTitle text-center text-white">Adding  Field </h3>
            <form className="newUserForm">
            <div className="newUserItem">
                    <label>Field Name</label>
                    <input type="text" placeholder="Computer Science" name="fieldName" id="fieldName" required />
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
