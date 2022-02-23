import React from 'react'

import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function ShowNewAsset() {
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
    <img src="https://www.zdnet.com/a/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg" 
    alt="No Imange" className="userShowImg" />
    <div className="userShoeTopTitle">
    <span className="userShowUsername">Laptop I7</span>
    <span className="userShowUserTitle">Muhabura</span>
    </div>
    </div>
    <div className="userShowBottom">
    <span className="userShowTitle text-dark">Asset Details</span>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark"/>
    <span className="userShowInfoTitle">5000</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">1425CND</span>
    </div>
    
  
    </div>
    </div>
    <div className="userUpdate">
        
    <form className="userUpdateForm">
    <div className="userUpdateLeft">
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">Working</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">2021</span>
    </div>
    <div className="userShowInfo">
    {/* Icon */}
    
    <CreditCard className="userShowIcon text-dark" />
    <span className="userShowInfoTitle">Laptop</span>
    </div> 
  <Link to="/registeredAssetReport"> 
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
