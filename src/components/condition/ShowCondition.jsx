import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom"; 

export default function ShowCondition() {
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
    <span className="userShowTitle text-dark">Condition Details</span>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">Good</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">2021-09-28</span>
    </div>
   
   <Link to="/conditionReport">
     <button className="btn btn-primary">Back</button>
     </Link>
    </div>
    </div>
    
    </div>   




            </div>
        </div>
    )
}
