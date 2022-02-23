import React from 'react'

import {Wc, CreditCard, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";


export default function EditNewAsset() {
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
  
  
    </div>
    </div>
    <div className="userUpdate">
        <h2 className="newUserTitleEdit text-center text-white">
    <span className="userUpdateTitle"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Edit Asset Information</span>
    </h2>
    <form className="userUpdateForm">
    <div className="userUpdateLeft">
    
    <div className="userUpdateItem">
    <label>Description</label>
    <input type="text" placeholder="Laptop" 
    className="userUpdateInput"  name="desc" id="desc"/>
    </div>
    
    <div className="userUpdateItem">
    <label>Acquisition_Value</label>
    <input type="text" placeholder="5000" 
    className="userUpdateInput"
    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} 
     />
    </div>
    
    <div className="userUpdateItem">
    <label>Note</label>
    <input type="text" placeholder="Working" 
    className="userUpdateInput"/>
    </div>
    
    <div className="userUpdateItem">
    <label>Asset Type</label>

   <select name="assetSubType" id="assetSubType" className="userUpdateInput">
       <option value="Furniture">Furniture</option>
       <option value="Others">Others</option>
   </select>

    {/* <input type="text" placeholder="Laptop" 
    className="userUpdateInput"
     name="subType"/> */}
    </div>
    <div className="userUpdateItem">
    <label>Facility</label>
    <input type="text" placeholder="Muhabura" 
    className="userUpdateInput"
     name="facility"/>
    </div>
    
    
    </div>
    <div className="userUpdateRight">
        <div className="userUpdateUpload">
            
             <label htmlFor="file">
                 
             <img src="https://www.zdnet.com/a/hub/i/r/2020/03/19/4d0e4e03-c980-43db-aa0f-2572aefcf89f/thumbnail/770x433/36d847f1d279f3a0cbaf29e1e9fc576f/surface-laptop-3-13-5-header.jpg"
             alt="No image" className="userUpdateImg" title="Upload Image"/> 
                 
                 {/* <Publish className="userUpdateIcon"/> */}
                 
                 </label>
             <input type="file" id="file" style={{display:"none"}} />
        </div>
        <button className="userUpdateButton bg-primary"><i className="fas fa-edit text-warning"/>&nbsp;&nbsp;Update</button>
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
