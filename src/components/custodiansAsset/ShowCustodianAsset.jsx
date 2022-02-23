import React from 'react'

import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function ShowAllCustodianAsset() {
    return (
        <div className="content-wrapper bg-white">
            <div className="editNewAsset">

                         {/* <h1 className="userTitle"> Edit User</h1> */}
        {/* <h1 className="newUserTitle text-center text-white">Edit Employee .....</h1> */}
        <div className="userTitleContainer">
 
    
    </div>
    
    <div className="userContainer">
    <div className="userShow">
    <div className="userShowTop">
    
    <div className="userShoeTopTitle">
    <span className="userShowUsername">11999800225455</span>
    <span className="userShowUserTitle">Fulgence Maniraho</span>
    </div>
    </div>
    <div className="userShowBottom">
    <span className="userShowTitle text-dark">Asset Details</span>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">1425CND</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">Laptop i7</span>
    </div>
    
    

    </div>
    </div>
    <div className="userUpdate">
        
    <form className="userUpdateForm">
    <div className="userUpdateLeft">
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">2021-09-27</span>
    </div>
 
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">2021-09-27</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">Etienno</span>
    </div>
  <Link to="/custodianAssignedAssetReport"> 
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
