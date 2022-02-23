import React from 'react'

import { Send, Close } from "@material-ui/icons";



export default function MaintainanceRequest() {

    return (
        <div className="content-wrapper bg-white">
            <div className="maintainanceRequest">

            <h3 className="newUserTitle text-center text-white">Maintainance Request</h3>
            <form className="newUserForm">
            <div className="newUserItem">
                            <label>Asset Serial Number</label>
                            <input type="text" placeholder="Laptop" name="assetDesc" id="assetDesc" value="CND7081XLG" readOnly />
                        </div>
                        <div className="newUserItem">
                            <label>Asset Code</label>
                            <input type="text" placeholder="Laptop" name="assetDesc" id="assetDesc" value="UR_CSTCND7081XLG" readOnly />
                        </div>
                        <div className="newUserItem">
                            <label>Asset Name</label>
                            <input type="text" placeholder="Laptop" name="assetDesc" id="assetDesc" value="Laptop" readOnly />
                        </div>
            <div className="newUserItem">
                    <label>Asset Condition</label>
                    <select name="assetType" id="assetSubType" className="newUserSelectDisplay">
                <option value="">---Condition----</option>
                   
                    <option value="furniture">Good</option>
                    <option value="bad">Bad</option>
                </select>
                </div>
                <div className="newUserItem">
                    <label>Description</label>
                  <textarea name="maintainRequest" id="maintainRequest" cols="30" rows="10" className="newUserSelectDisplay" placeholder="Description"></textarea>
                </div>

                <div className="newUserItem">
                            <label>Reported By</label>
                            <input type="text" placeholder="Maintained By...." name="assetDesc" id="assetDesc" />
                        </div>
            
                
                 
               
                
               {/* <div className="buttons">                */}
                <button className="newUserButton bg-primary"><Send className="text-warning"/> Request</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
                {/* </div> */}
            </form>



            

            </div>
            
            
        </div>
    )
}
