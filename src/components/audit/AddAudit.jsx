import React from 'react'

import { Send, Close } from "@material-ui/icons";


export default function AddAudit() {

    return (
        <div className="content-wrapper  bg-white">
        <div className="addNewAsset">

    <h3 className="newUserTitle text-center text-white">Record Audit </h3>
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
                    <label>Condition</label>
                    <select name="auditCondition" id="auditCondition" className="newUserSelect">
                    <option value="">---Condition----</option>
                        <option value="auditCondition1">Fair</option>
                        <option value="auditCondition1">Good</option>
                        <option value="auditCondition1">Bad</option>
                    </select>
                    </div>
                    <div className="newUserItem">
                    <label>Service Status</label>
                    <select name="serviceStatus" id="serviceStatus" className="newUserSelect">
                    <option value="">---Service Status----</option>
                        <option value="serviceStatus1">Verified</option>
                        <option value="serviceStatus1">Pending</option>
                        <option value="serviceStatus1">In Progress</option>
                    </select>
                    </div>
                    <div className="newUserItem">
                    <label>Validity</label>
                    <select name="auditValidity" id="auditValidity" className="newUserSelect">
                    <option value="">---Validity---</option>
                        <option value="auditValidity1">Yes</option>
                        <option value="auditValidity1">No</option>
                      
                    </select>
                    </div>
                    
                    <div className="newUserItem">
                        <label>Reason (Comment)</label>
                        <textarea name="auditReason" id="auditReason" cols="30" rows="10" className="newUserSelect"></textarea>
                    </div> 
                   
                   <button className="newUserButton bg-primary"><Send className="text-warning"/> Add</button>
           
                </form>
                
        
          </div>
    </div>

    )
}
