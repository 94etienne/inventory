import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ShowAssetRent() {
    return (
        <div className="content-wrapper bg-white">
        <div className="editAssetType">
        {/* <h1 className="userTitle"> Edit User</h1> */}
    {/* <h1 className="newUserTitle text-center text-white">Edit Employee .....</h1> */}

<div className="userContainer">
<div className="userShow">

<div className="userShowBottom">
<span className="userShowTitle font-weight-bold text-dark">Asset Returned Details</span>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle ">Laptop</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">CND7081XLG</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Furniture</span>
</div>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">5000</span>
</div>


</div>
</div>
<div className="userUpdate">
  
<form className="userUpdateForm">

<div className="userUpdateLeft">


<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Pauline Uwase</span>
</div>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">2021-09-23</span>
</div>

<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Good</span>
</div>
<div className="userShowInfo">
{/* Icon */}

<CreditCard className="userShowIcon text-dark"/>
<span className="userShowInfoTitle">Screen Damaged</span>
</div>

 <Link to="/allReturnedAssets">
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
