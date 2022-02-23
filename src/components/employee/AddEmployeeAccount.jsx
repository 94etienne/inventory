import React from 'react'

import { Link } from "react-router-dom";
import { Send, Close } from "@material-ui/icons";


export default function AddEmployeeAccount() {
 

    return (
        <div className="content-wrapper bg-white">
            <div className="employeeAccount">
                         
                <h3 className="newUserTitle text-center text-white bg-info">Adding Employee Account </h3>
                <form className="newUserForm">
                <div className="newUserItem">
                    <label>Position</label>
                    <select name="userCategory" id="userCategory" className="newUserSelect">
                        <option value="">----Select----</option>
                        <option value="human_resource">Human Resource</option>
                        <option value="asset_manager">Asset Manager</option>
                        <option value="lab_manager">Lab Manager</option>
                        <option value="it">IT</option>
                        <option value="custodian">Custodian</option>
                        <option value="security_guard">Security Guard</option>
                    </select>
                    </div>

                   
                    <div className="newUserItem">
                    <label>Email</label>
                    <select name="email" id="email" className="newUserSelect">
                        <option value="">----Select----</option>
                        <option value="email">19etienne@gmail.com</option>
                        
                    </select>
                    </div>
                
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" placeholder="etienno" name="username" id="username" />
                    </div>
                    
                    
                   <button className="newUserButton bg-info"><Send className="text-warning"/> Add</button>
                 
                </form>
               


         
            
                </div>
        </div>
    )
}
