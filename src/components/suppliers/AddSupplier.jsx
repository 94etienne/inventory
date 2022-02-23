import React from 'react'
import { Send, Close } from "@material-ui/icons";
export default function AddSupplier() {

    return (
        <div className="content-wrapper bg-white">
        <div className=" addEmployee">
       
       <h1 className="newUserTitle text-center text-white">Adding Supplier .....</h1>
       <form className="newUserForm"  method="post" >
      
          
           <div className="newUserItem">
               <label>Full Name</label>
               <input type="text" placeholder="Etienne Ntambara" name="fullname" id="fullname" />
           </div>
           <div className="newUserItem">
               <label>NID (Identification)</label>
         <input onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
          placeholder="1199......"  name="nid" id="nid"  maxlength="16"  /> 
          

           </div>
           <div className="newUserItem">
        <label>TIN </label>
         <input onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
          placeholder="109912354"  name="tin" id="tin"  maxlength="9"/> 
          

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
               <label>Supplier Title</label>
               <input type="text" placeholder="Title" name="supplierTitle" id="supplierTitle" />
           </div>
          
           <div className="newUserItem">
           <label>Sector</label>
           <select name="supplierSector" id="supplierSector" className="newUserSelect">
               <option value="">----Select----</option>
               <option value="Public">Public</option>
               <option value="Private">Private</option>
                        
               
           </select>
           </div>

             
      {/* <div className="buttons">    */}
                 
      <button className="newUserButton bg-primary"><Send className="text-warning"/> Add</button>
       {/* <button className="newUserCancel bg-primary"><Close className="text-warning"/> &nbsp; Cancel</button> */}
       {/* </div> */}

       
          
       </form>

          
       </div>
   </div>
    )
}
