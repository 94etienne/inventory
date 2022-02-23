import React from 'react'

import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function ShowEmployee() {
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
        <img src="https://images.zapnito.com/users/329505/avatar/medium_rlNGT48pR0qHDdB3bBGg_passport.jpg.png" 
        alt="No Imange" className="userShowImg" />
        <div className="userShoeTopTitle">
        <span className="userShowUsername">Etienno NTAMBARA</span>
        <span className="userShowUserTitle">IT</span>
        </div>
        </div>
        <div className="userShowBottom">
        <span className="userShowTitle text-dark font-weight-bold">Account Details</span>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Finance</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Computer Science</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Mater's Degree</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">11999800321068</span>
        </div>
     
      
        </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="userUpdate">        
        <form className="userUpdateForm">
        <div className="userUpdateLeft">
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Single</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark" />
        <span className="userShowInfoTitle">Male</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">Rwandan</span>
        </div>


        {/* <span className="userShowTitle">Contact Details</span> */}
       
        <div className="userShowInfo">
        {/* Icon */}
        
        <MailOutline className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">19etienne@gmail.com</span>
        </div>
        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">etienno</span>
        </div>

        <div className="userShowInfo">
        
        {/* Icon */}
        
        <PhoneAndroid className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">078 37 16 761</span>
        </div>

        <div className="userShowInfo">
        {/* Icon */}
        
        <CreditCard className="userShowIcon text-dark"/>
        <span className="userShowInfoTitle">1999-24-08</span>
        </div>
        <Link to="/employeesReport">
        <button className="btn btn-info">Back</button>
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
