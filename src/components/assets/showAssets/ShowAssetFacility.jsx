import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ShowAssetFacility() {
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
   <Link to="/registeredFacilitiesReport">
   <button className="btn btn-primary">Back</button>
   </Link>
    </div>
    </div>
    
    </div>   
    </div>
            
        </div>
    )
}
