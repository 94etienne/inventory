import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ShowAssetMovement() {
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


</div>
</div>
<div className="userUpdate">
   
<form className="userUpdateForm">

<div className="userUpdateLeft">
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
<Link to="/movementReport">
 <button className="btn btn-primary">Back</button>
 </Link>
</div>

</form>
</div>
</div>   



        </div>
    </div>
    )
}
