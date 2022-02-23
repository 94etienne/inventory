import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ShowDepartment() {
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
<span className="userShowTitle text-dark font-weight-bold">Department Details</span>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Finance</span>
</div>
<Link to="/departmentreport">
<button className="btn btn-primary">Back</button>
</Link>
 
</div>
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
