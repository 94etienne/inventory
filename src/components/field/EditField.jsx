import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function EditField() {
    return (
        <div className="content-wrapper bg-white">
        <div className="editAssetType">
        {/* <h1 className="userTitle"> Edit User</h1> */}
    {/* <h1 className="newUserTitle text-center text-white">Edit Employee .....</h1> */}
    <div className="userTitleContainer">
    
    
</div>

<div className="userContainer">
<div className="userShow">

<div className="userShowBottom">
<span className="userShowTitle text-dark font-weight-bold">Field Details</span>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Computer Science</span>
</div>


 
</div>
</div>
<div className="userUpdate">
    <h2 className="newUserTitleEdit text-center text-white">
<span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Field Information</span>
</h2>
<form className="userUpdateForm">

<div className="userUpdateLeft">

<div className="userUpdateItem">
<label>Field  Name</label>
<input type="text" placeholder="Computer Science" 
className="userUpdateInput" name="fieldEdit" id="fieldEdit"/>


</div>


</div>
<div className="userUpdateRight" >
  
    <button className="userUpdateButton bg-primary"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Update</button>
</div>

</form>
</div>
</div>   



        {/* Footer */}
        <div className="footerHeight1">
           <hr />
                       
       </div>
        </div>
    </div>
    )
}
