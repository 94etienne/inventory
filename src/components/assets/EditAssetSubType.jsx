import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function EditAssetSubType() {
    return (
        <div className="content-wrapper bg-white">
            <div className="editAssetSubType">

         {/* <h1 className="userTitle"> Edit User</h1> */}
        {/* <h1 className="newUserTitle text-center text-white">Edit Employee .....</h1> */}
        <div className="userTitleContainer">
 
    
    </div>
    
    <div className="userContainer">
    <div className="userShow">
   
    <div className="userShowBottom">
    <span className="userShowTitle text-dark font-weight-bold">Asset Sub Type Details</span>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">Laptop</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">Muhabura</span>
    </div>
   
   
     
    </div>
    </div>
    <div className="userUpdate">
        <h2 className="newUserTitleEdit text-center text-white">
    <span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Asset Sub Type Information</span>
    </h2>
    <form className="userUpdateForm">
    
    <div className="userUpdateLeft">
  
    <div className="userUpdateItem">
    <label>Asset Type</label>
    <select name="assetSubType" id="assetSubType" className="userUpdateInput">
       <option value="furniture">Furniture</option>
       <option value="Others">Others</option>
   </select>
    </div>
    <div className="userUpdateItem">
    <label>Sub Type Name</label>
    <input type="text" placeholder="Laptop" 
    className="userUpdateInput" name="assetSubTypeName" id="assetSubTypeName"/>

  
    </div>  
    
    </div>
    <div className="userUpdateRight" >      
        <button className="userUpdateButton"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Update</button>
    </div>
   
    </form>
    </div>
    </div>   

            </div>
        </div>
    )
}
