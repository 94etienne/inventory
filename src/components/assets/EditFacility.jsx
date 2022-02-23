import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function EditFacility() {
    return (
        <div className="content-wrapper bg-white">
            <div className="facility">

  {/* <h1 className="userTitle"> Edit User</h1> */}
        {/* <h1 className="newUserTitle text-center text-white">Edit Employee .....</h1> */}
        <div className="userTitleContainer">
     
    
    </div>
    
    <div className="userContainer">
    <div className="userShow">

    <div className="userShowTop">
    <img src="https://www.zdnet.com/a/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg" 
    alt="No Imange" className="userShowImg" />
    <div className="userShoeTopTitle">
    <span className="userShowUsername">Muhabura</span>
    {/* <span className="userShowUserTitle">Muhabura</span> */}
    </div>
    </div>
   
    <div className="userShowBottom">
    <span className="userShowTitle text-dark font-weight-bold ">Facility Details</span>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">Muhabura</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">Classroom</span>
    </div>
   
   
     
    </div>
    </div>
    <div className="userUpdate">
        <h2 className="newUserTitleEdit text-center text-white">
    <span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Facility Information</span>
    </h2>
    <form className="userUpdateForm">    
    <div className="userUpdateLeft">
  
    <div className="userUpdateItem">
    <label>Facility Name</label>
    <input type="text" placeholder="Furniture" 
    className="userUpdateInput" name="ediAssetName" id="ediAssetName" value="Muhabura"/>

  
    </div>
    <div className="userUpdateItem">
    <label>Facility Descriprion</label>
    <input type="text" placeholder="Furniture" 
    className="userUpdateInput" name="editAssetDesc" id="editAssetDesc" value="Classroom"/>

  
    </div>
    
    
    </div>
    <div className="userUpdateRight" >
    <div className="userUpdateUpload">
            
            <label htmlFor="file">
                
            <img src="https://www.zdnet.com/a/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"
            alt="No image" className="userUpdateImg" title="Upload Image"/> 
                
                {/* <Publish className="userUpdateIcon"/> */}
                
                </label>
            <input type="file" id="file" style={{display:"none"}} />
       </div>
      
        <button className="userUpdateButton bg-primary"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Update</button>
    </div>
   
    </form>
    </div>
    </div>   
    </div>
            
        </div>
    )
}
