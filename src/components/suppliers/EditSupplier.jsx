import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function EditSupplier() {
    return (
        <div className="content-wrapper bg-white">
        <div className="editEmployee">
         {/* <h1 className="userTitle"> Edit User</h1> */}
    {/* <h1 className="newUserTitle text-center text-white">Edit Employee .....</h1> */}
    <div className="userTitleContainer">
      
    
    </div>
    
    <div className="userContainer">
    <div className="userShow">
    <div className="userShowTop">
     <div className="userShoeTopTitle">
    <span className="userShowUsername">Fulgence Maniraho</span>
    <span className="userShowUserTitle">Public</span>
    </div>
    </div>
    <div className="userShowBottom">
    <span className="userShowTitle text-dark font-weight-bold">Supplier's Details</span>
   
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">1199880000000000</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">1013554821</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">fulgence@gmail.com</span>
    </div>
  
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">0783716765</span>
    </div>

    <div className="userShowInfo">
    
    {/* Icon */}
    
    <PhoneAndroid className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">Material Delivering</span>
    </div>

  
    </div>
    </div>
    <div className="userUpdate">
        <h2 className="newUserTitleEdit text-center text-white">
    <span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Supplier's Information</span>
    </h2>
    <form className="userUpdateForm">
    <div className="userUpdateLeft">

    <div className="userUpdateItem">
<label>Sector</label>
<select name="supplierSector" id="supplierSector" className="userUpdateInput">
   <option value="Public">Public</option>
   <option value="Private">Private</option>
</select>
</div>

<div className="userUpdateItem">
    <label>Supplier Title</label>
    <input type="text"
    className="userUpdateInput" autoComplete="false" placeholder="Material Delivering"/>
    </div>
    
    <div className="userUpdateItem">
    <label>NID (Identification)</label>
    <input type="text" placeholder="1199980032410568" 
    className="userUpdateInput" 
    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}maxlength="16" 
              pattern=".{16}" title="16 numbers"  name="nid" id="nid"/>
    </div>

    <div className="userUpdateItem">
    <label>TIN</label>
    <input type="text" placeholder="1016664589" 
    className="userUpdateInput" 
    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}maxlength="9" 
              pattern=".{9}" title="9 numbers"  name="tin" id="tin"/>
    </div>
    
    <div className="userUpdateItem">
    <label>Full Name</label>
    <input type="text" placeholder="Etienno NTAMBARA" 
    className="userUpdateInput" autoComplete="false"/>
    </div>
    
    <div className="userUpdateItem">
    <label>Email</label>
    <input type="email" placeholder="19etienne@gmail.com" 
    className="userUpdateInput" />
    </div>
    
    <div className="userUpdateItem">
    <label>Phone</label>
    <input type="text" placeholder="078 37 16 761" 
    className="userUpdateInput"
    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}maxlength="10" 
    pattern=".{10}" title="10 numbers"  name="phone"/>
    </div>
    
    
    </div>
    <div className="userUpdateRight">
     <button className="userUpdateButton bg-primary"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Update</button>
    </div>
    </form>
    </div>
    </div>


    {/* Footer Call */}
    <div className="footerHeight1">
           <hr />
                       
       </div>
    </div>
    </div>
    )
}
