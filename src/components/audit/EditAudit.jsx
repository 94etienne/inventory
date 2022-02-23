import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function EditAudit() {
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
<span className="userShowTitle font-weight-bold text-dark">Audit Details</span>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle ">Etienne Ntambara</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">119988003210369</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Furniture</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Laptop-CND7081XLG</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Good</span>
</div>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Verified</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Yes</span>
</div>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Audit Done Well</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">2021-09-28</span>
</div>
 
</div>
</div>
<div className="userUpdate">
    <h2 className="newUserTitleEdit text-center text-white">
<span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Audit Information</span>
</h2>
<form className="userUpdateForm">

<div className="userUpdateLeft">
<div className="userUpdateItem">
    <label>Custodian NID</label>
    <select name="custodianNid" id="custodianNid" className="userUpdateInput">
       <option value="custNID">119988003210369</option>
       <option value="Others">119958705246545</option>
   </select>
    </div>
<div className="userUpdateItem">
    <label>Custodian Name</label>
    <select name="custodianName" id="custodianName" className="userUpdateInput">
       <option value="custName">Etienne Ntambara</option>
       <option value="Others">Pauline</option>
   </select>
    </div>

    <div className="userUpdateItem">
    <label>Asset Type</label>
    <select name="assetType" id="assetType" className="userUpdateInput">
       <option value="assetType1">Furniture</option>
       <option value="assetType1">Furniture</option>
   </select>
    </div>
    <div className="userUpdateItem">
    <label>Asset Name</label>
    <select name="assetName" id="assetName" className="userUpdateInput">
       <option value="assetName1">Laptop-CND7081XLG</option>
       <option value="assetName1">Laptop-CND7081XLG</option>
   </select>
    </div>

    <div className="userUpdateItem">
    <label>Condition</label>
    <select name="auditCondition" id="auditCondition" className="userUpdateInput">
       <option value="auditCondition1">Good</option>
       <option value="auditCondition1">Bad</option>
   </select>
    </div>
    <div className="userUpdateItem">
    <label>Service Status</label>
    <select name="auditService" id="auditService" className="userUpdateInput">
       <option value="auditService1">Yerified</option>
       <option value="auditServic1">Pending</option>
   </select>
    </div>
    <div className="userUpdateItem">
    <label>Validity</label>
    <select name="auditValidity" id="auditValidity" className="userUpdateInput">
       <option value="auditValidity1">Yes</option>
       <option value="auditValidity1">No</option>
   </select>
    </div>

<div className="userUpdateItem">
<label> Reason (Comments)</label>
<input type="text" placeholder="Working" 
className="userUpdateInput" name="movementReason" id="movementReason"/>
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
