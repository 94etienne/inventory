import React from 'react'

import { Send, Close } from "@material-ui/icons";



export default function AddCustodianAsset() {

    return (
        <div className="content-wrapper  bg-white">
        <div className="addNewAsset">

    <h3 className="newUserTitle text-center text-white">Assign asset(s) to Custodian </h3>
                <form className="newUserForm">

                <div className="newUserItem">
                    <label>Employee NID</label>
                    <select name="employeeNid" id="employeeNid" className="newUserSelect">
                    <option value="">---Employee NID----</option>
                        <option value="EmpNid">119988003210369</option>
                        <option value="EmpNid">119988003210369</option>
                    </select>
                    </div>

                    <div className="newUserItem">
                    <label>Employee Name</label>
                    <select name="employeeName" id="employeeName" className="newUserSelect">
                    <option value="">---Employee Name----</option>
                        <option value="EmpName">Etienne NTAMBARA</option>
                        <option value="EmpName">Fulgence MANIRAHO</option>
                    </select>
                    </div>

                    <div className="newUserItem">
                    <label>Asset Code</label>
                    <select name="AssetCode" id="AssetCode" className="newUserSelect">
                    <option value="">---Asset Code----</option>
                        <option value="AssetCode1">CND7081XLG</option>
                        <option value="AssetCode1">CND7081XLG</option>
                    </select>
                    </div>

                    <div className="newUserItem">
                    <label>Asset Name</label>
                    <select name="AssetName" id="AssetName" className="newUserSelect">
                    <option value="">---Asset Name----</option>
                        <option value="AssetName1">Laptop i7</option>
                        <option value="AssetName1">Desktop i7</option>
                    </select>
                    </div>
               
                    <div className="newUserItem">
                        <label>From</label>
                        <input type="date" placeholder="from" name="from" id="from" />
                    </div>  
                    <div className="newUserItem">
                        <label>To</label>
                        <input type="date" placeholder="to" name="to" id="to" />
                    </div> 

                    <div className="newUserItem">
                        <label>Recorded By</label>
                        <input type="text" placeholder="Pauline Uwase" name="recordedBy" id="recordedBy" />
                    </div>            
             
                   {/* <div className="buttons">                */}
                   <button className="newUserButton bg-primary"><Send className="text-warning"/> Assign</button>
            {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
                    {/* </div>  */}
                </form>
                
          
          </div>
    </div>
    )
}
