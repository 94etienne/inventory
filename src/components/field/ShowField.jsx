import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ShowField() {
    return (
        <div className="content-wrapper bg-white">
        <div className="editAssetType">
       
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

<Link to ="fieldReport">
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
