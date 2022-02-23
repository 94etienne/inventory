import React from 'react'

// Icons
import {Close, DeleteOutline, Send} from "@material-ui/icons";


export default function AddCondition() {

    return (
        <div className="content-wrapper bg-white">
        <div className="addAssetType">

            <h3 className="newUserTitle text-center text-white">Adding  Condition </h3>
            <form className="newUserForm">
            <div className="newUserItem">
                    <label>ConditionName</label>
                    <input type="text" placeholder="Good" name="addCondition" id="addCondition" required />
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
