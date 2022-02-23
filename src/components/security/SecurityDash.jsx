import React from 'react';
import {Close, DeleteOutline, Send} from "@material-ui/icons";

const Securitydash = () => {
    return (
        <div className="content-wrapper bg-white">
            <div className="security">

                <h3 className="newUserTitle text-white text-center">Register/Check</h3>

                <form className="newUserForm">
                <div className="newUserItem">
               <label>Facility</label>
               <select name="userFacility" id="userFacility" className="newUserSelect">
                   <option value="">----Select----</option>
                   <option value="userFacility1">MUHABURA</option>
                   <option value="userFacility1">CAMP KIGALI</option>
                   <option value="userFacility1">KALISIMBI</option>
               </select>
               </div>

               <div className="newUserItem">
               <label>Activity</label>
               <select name="activity" id="activity" className="newUserSelect">
                   <option value="">----Select----</option>
                   <option value="activity1">Check</option>
                   <option value="activity1">Register</option>
                   
               </select>
               </div>
            
                
                
               
                
               {/* <div className="buttons">                */}
                <button className="newUserButton bg-primary"><Send className="text-warning"/> Add</button>
                {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
                {/* </div> */}
            </form>


            </div>
            
        </div>
    );
}

export default Securitydash;
