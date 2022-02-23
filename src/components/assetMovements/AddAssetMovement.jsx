import React from 'react'

import { Send, Close } from "@material-ui/icons";


export default function AddAssetMovement() {

    return (
        <div className="content-wrapper  bg-white">
        <div className="addNewAsset">
 
    <h3 className="newUserTitle text-center text-white">Record Asset Movement </h3>
                <form className="newUserForm">

                <div className="newUserItem">
                    <label>Custodian Name</label>
                    <select name="custodianName" id="custodianName" className="newUserSelect">
                    <option value="">---Custodian Name----</option>
                        <option value="custodName">Fulgence Maniraho</option>
                        <option value="custodName">Pauline Uwase</option>
                    </select>
                    </div>

                    <div className="newUserItem">
                    <label>Custodian NID</label>
                    <select name="custodianNid" id="custodianNid" className="newUserSelect">
                    <option value="">---Custodian NID----</option>
                        <option value="custNID">11994800310658</option>
                        <option value="custNID">11994800310658</option>
                    </select>
                    </div>

                    <div className="newUserItem">
                    <label>Asset Type</label>
                    <select name="cassetType" id="cassetType" className="newUserSelect">
                    <option value="">---Asset Type----</option>
                        <option value="cassetType1">Furniture</option>
                        <option value="cassetType1">Furniture</option>
                    </select>
                    </div>

                    <div className="newUserItem">
                    <label>Asset Name</label>
                    <select name="cassetName" id="cassetName" className="newUserSelect">
                    <option value="">---Asset Name----</option>
                        <option value="cassetName1">Laptop-CND7081XLG</option>
                        <option value="cassetName1">Laptop-CND7081XLG</option>
                    </select>
                    </div>
               
                    <div className="newUserItem">
                        <label>Movement Reason</label>
                        <textarea name="movementReason" id="movementReason" cols="30" rows="10" className="newUserSelect"></textarea>
                    </div>  
                    <div className="newUserItem">
                        <label>Received By</label>
                        <input type="receivedBy" placeholder="received By" name="receivedBy" id="receivedBy" />
                    </div> 

                    <div className="newUserItem">
                        <label>Recorded By</label>
                        <input type="text" placeholder="Recorded By" name="recordedBy" id="recordedBy" />
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
