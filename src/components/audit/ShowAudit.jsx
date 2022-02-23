import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ShowAudit() {
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

</div>
</div>
<div className="userUpdate">
  
<form className="userUpdateForm">

<div className="userUpdateLeft">

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
 <Link to="/auditReport">
 <button className="btn btn-primary">Back</button>
 </Link>
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
