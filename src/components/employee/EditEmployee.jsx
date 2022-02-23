import React from 'react'

import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function EditEmployee() {
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
        <img src="https://images.zapnito.com/users/329505/avatar/medium_rlNGT48pR0qHDdB3bBGg_passport.jpg.png" 
        alt="No Imange" className="userShowImg" />
        <div className="userShoeTopTitle">
        <span className="userShowUsername">Etienno NTAMBARA</span>
        <span className="userShowUserTitle">IT</span>
        </div>
        </div>
        <div className="userShowBottom">
        <span className="userShowTitle text-dark font-weight-bold">Account Details</span>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Finance</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Computer Science</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Mater's Degree</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">11999800321068</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Single</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark" />
        <span className="userShowInfoTitle">Male</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Rwandan</span>
        </div>


        {/* <span className="userShowTitle">Contact Details</span> */}
       
        <div className="userShowInfo">
        {/* Icon */}
        
        <MailOutline className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">19etienne@gmail.com</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">etienno</span>
        </div>

        <div className="userShowInfo">
        
        {/* Icon */}
        
        <PhoneAndroid className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">078 37 16 761</span>
        </div>

        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">1999-24-08</span>
        </div>
      
      
        </div>
        </div>
        <div className="userUpdate">
            <h2 className="newUserTitleEdit text-center bg-info text-white">
        <span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Employee Information</span>
        </h2>
        <form className="userUpdateForm">
        <div className="userUpdateLeft">

        <div className="userUpdateItem">
    <label>Department</label>
    <select name="assetSubType" id="assetSubType" className="userUpdateInput">
       <option value="furniture">Finance</option>
       <option value="Others">ICT</option>
   </select>
    </div>
    <div className="userUpdateItem">
    <label>Field</label>
    <select name="assetSubType" id="assetSubType" className="userUpdateInput">
       <option value="fieldEdit">Computer Science</option>
       <option value="FieldEdit">IS</option>
   </select>
    </div>
    <div className="userUpdateItem">
    <label>Level</label>
    <select name="assetSubType" id="assetSubType" className="userUpdateInput">
       <option value="levelEdit">Professor</option>
       <option value="levelEdit">Master's Dgree</option>
   </select>
    </div>
    <div className="userUpdateItem">
        <label>Job Title</label>
        <input type="text"
        className="userUpdateInput" autoComplete="false" placeholder="IT"/>
        </div>
        
        <div className="userUpdateItem">
        <label>NID (Identification)</label>
        <input type="text" placeholder="1199980032410568" 
        className="userUpdateInput" 
        onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}maxlength="16" 
                  pattern=".{16}" title="16 numbers"  name="nid" id="nid"/>
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
        pattern=".{10}" title="10 numbers" placeholder="078 37 16 761"  name="phone"/>
        </div>
        
        
        </div>
        <div className="userUpdateRight">
            <div className="userUpdateUpload">
                
                 <label htmlFor="file">
                     
                 <img src="https://images.zapnito.com/users/329505/avatar/medium_rlNGT48pR0qHDdB3bBGg_passport.jpg.png"
                 alt="No image" className="userUpdateImg" title="Upload Image"/> 
                     
                     {/* <Publish className="userUpdateIcon"/> */}
                     
                     </label>
                 <input type="file" id="file" style={{display:"none"}} />
            </div>
            <button className="userUpdateButton bg-info"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Update</button>
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
