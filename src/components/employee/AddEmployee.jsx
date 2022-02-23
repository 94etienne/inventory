import React from 'react'

import { Send, Close } from "@material-ui/icons";



export default function AddEmployee() {

    return ( 
        
        <div className="content-wrapper bg-white">
            <div className=" addEmployee">
           
           <h3 className="newUserTitle text-center bg-info text-white">Adding Employee </h3>
           <form className="newUserForm"  method="post"  >
           <div className="newUserItem">
               <label>Department Name</label>
               <select name="userCategory" id="userCategory" className="newUserSelect">
                   <option value="">----Select----</option>
                   <option value="ICT">ICT</option>
                   <option value="Finance">Finance</option>
                   <option value="EstateManagement">Estate Management</option>
               </select>
               </div>
               <div className="newUserItem">
               <label>Field</label>
               <select name="userCategory" id="userCategory" className="newUserSelect">
                   <option value="">----Select----</option>
                   <option value="ICT">Computer Science</option>
                   <option value="Engineering">Engineering</option>
                   <option value="Architecture">Architecture</option>
               </select>
               </div>

               <div className="newUserItem">
               <label>Level</label>
               <select name="userCategory" id="userCategory" className="newUserSelect">
                   <option value="">----Select----</option>
                   <option value="Professor">Professor</option>
                   <option value="PHD">PHD</option>
                   <option value="Msters">Master's Degree</option>
                   <option value="Bachelor">Bachelor Degree</option>
                   
                   
               </select>
               </div>

              
               <div className="newUserItem">
                   <label>Full Name</label>
                   <input type="text" placeholder="Etienne Ntambara" name="fullname" id="fullname" />
               </div>
               <div className="newUserItem">
                   <label>NID (Identification)</label>
             <input onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}maxlength="16" 
             pattern=".{16}" title="16 numbers" placeholder="1199......"  name="nid" id="nid" /> 

               </div>
               <div className="newUserItem">
                   <label>Status</label>
                   <select name="gender" id="gender" className="newUserSelect">
                   <option value="Single">Single</option>
                   <option value="Married">Married</option>
                   <option value="Divorce">Divorce</option>
               </select>
               </div>

               <div className="newUserItem">
                   <label>Gender</label>
                   <select name="gender" id="gender" className="newUserSelect">
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
               </select>
               </div>
               <div className="newUserItem">
                   <label>Nationality</label>
                   <select name="gender" id="gender" className="newUserSelect">
                   <option value="nationality">Rwandan</option>
                   <option value="nationality">Brudian</option>
               </select>
               </div>
               <div className="newUserItem">
                   <label>Email</label>
                   <input type="email" placeholder="email@gmail.com" name="email" id="email" />
               </div>
               <div className="newUserItem">
                   <label>Phone</label>
               <input onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}maxlength="10" 
             pattern=".{10}" title="10 numbers" placeholder="078 37 16 761"  name="phone" /> 
               </div>
               <div className="newUserItem">
                   <label>Date of birth</label>
                   <input type="date" placeholder="2021-09-16" name="dob" id="dob" />
               </div>
               <div className="newUserItem">
                   <label>username</label>
                   <input type="text" placeholder="etienne" name="username" id="username" minLength="6" />
               </div>
               <div className="newUserItem">
                   <label>Job Title</label>
                   <input type="text" placeholder="IT" name="jobTitle" id="jobTitle" />
               </div>
               <div className="newUserItem">
                            <label>Profile </label>
                            <input type="file" placeholder="Etienne Ntambara" />
                        </div>

                 
          {/* <div className="buttons">    */}
                     
          <button className="newUserButton bg-info"><Send className="text-warning"/> Add</button>
           {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
           {/* </div> */}

           
              
           </form>
           

          
           </div>
       </div>
    )
}



