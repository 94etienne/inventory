import React from 'react'
import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ShowSupplier() {
    return (
        <div className="content-wrapper bg-white">
        <div className="editEmployee">
         {/* <h1 className="userTitle"> Edit User</h1> */}
    {/* <h1 className="newUserTitle text-center text-white">Edit Employee .....</h1> */}
    <div className="userTitleContainer">
      
    
    </div>
    
    <div className="userContainer">
    <div className="userShow">
    <div className="userShowTop">
     <div className="userShoeTopTitle">
    <span className="userShowUsername">Fulgence Maniraho</span>
    <span className="userShowUserTitle">Public</span>
    </div>
    </div>
    <div className="userShowBottom">
    <span className="userShowTitle text-dark font-weight-bold">Supplier's Details</span>
   
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">1199880000000000</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">1013554821</span>
    </div>
    
    </div>
    </div>
    <div className="userUpdate">

    <form className="userUpdateForm">
    <div className="userUpdateLeft">
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">fulgence@gmail.com</span>
    </div>
  
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">0783716765</span>
    </div>

    <div className="userShowInfo">
    
    {/* Icon */}
    
    <PhoneAndroid className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">Material Delivering</span>
    </div>
    <Link to="/suppliersReport">
    <button className="btn btn-primary">Back</button>
    </Link>
    </div>
     </form>
    
    </div>
    </div>


    {/* Footer Call */}
    <div className="footerHeight1">
           <hr />
                       
       </div>
    </div>
    </div>
    )
}
