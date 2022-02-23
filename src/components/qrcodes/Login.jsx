import React from 'react'
// Icons
import {Close, DeleteOutline, Send} from "@material-ui/icons";

export default function Login() {
    return (
        <div className="content-wrapper bg-white">
        <div className="addAssetType">

            <h1 className="newUserTitle text-center text-white">Adding  Level (Qualification) .....</h1>
            <form className="newUserForm">
            <div className="newUserItem">
                    <label>Level (Qualification) Name</label>
                    <input type="text" placeholder="Professor" name="levelName" id="levelName" required />
                </div>
            
                
                
               
                
               {/* <div className="buttons">                */}
                <button className="newUserButton bg-primary"><Send className="text-warning"/> Login</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
                {/* </div> */}
            </form>

            </div>
        </div>
    )
}
