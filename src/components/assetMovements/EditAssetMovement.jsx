import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function EditAssetMovement() {
    return (
        <div className="content-wrapper bg-white">
        <div className="editAssetType">
   
    <div className="userTitleContainer">
    
   
</div>

<div className="userContainer">
<div className="userShow">

<div className="userShowBottom">
<span className="userShowTitle text-dark font-weight-bold">Movements Details</span>
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
<span className="userShowInfoTitle">Working</span>
</div>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Fulgence Maniraho</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Pauline Uwase</span>
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
<span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Movement Information</span>
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
<label>Movement Reason</label>
<input type="text" placeholder="Working" 
className="userUpdateInput" name="movementReason" id="movementReason"/>
</div>

<div className="userUpdateItem">
<label>Recorded By</label>
<input type="text" placeholder="Etienno" 
className="userUpdateInput" name="recordedBy" id="recordedBy"/>
</div>
<div className="userUpdateItem">
<label>Received By</label>
<input type="text" placeholder="Etienno" 
className="userUpdateInput" name="receivedBy" id="receivedBy"/>
</div>


</div>
<div className="userUpdateRight" >
  
    <button className="userUpdateButton bg-primary"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Update</button>
</div>

</form>
</div>
</div>   



        </div>
    </div>
    )
}
