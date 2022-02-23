import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./header.css";


export default class Header extends Component {
    render() {
        return (
            <div className="header">
              
    <nav className="main-header navbar navbar-expand navbar-white navbar-light bg-info fixed-top">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link text-white" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <h1>
        <Link to="/Dashboard" className="nav-link text-white text-lg font-weight-bold text-center">Open Inventory Management System</Link>
      </h1>
      </li>
     
    </ul>
    
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
     
      {/* Maintainance Request Dropdown */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell text-white" />
          <span className="badge badge-warning navbar-badge">18</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">15 Request for Maintainance</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
             4 Request from Fulgence 
            <span className="float-right text-muted text-sm">3 mins <i className="fas fa-check mr-2 text-success" /></span> 
            
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            8 Request from Puline
            <span className="float-right text-muted text-sm">12 hours &nbsp;
            <i className="fas fa-check mr-2 text-success" /></span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
          3 Request from Etienne
            <span className="float-right text-muted text-sm">2 days &nbsp;
            <i className="fas fa-check mr-2 text-success" /></span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Request</a>
        </div>
      </li>


      {/*Approved  Maintainance Request Dropdown  */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell text-white" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">15 Approved Maintainance Request </span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            4 Request from Fulgence
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
           8 Request from Puline
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
          3 Request from Etienne
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Approved Request</a>
        </div>
      </li>
   
 
  {/* Profile Picture */}
  {/* Notifications Dropdown Menu */}
  <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
        <li className="user-panel mt-0 pb-0 mb-0 d-flex">
        <li className="image">
          <img src="dist/img/etienno.jpg" className="img-circle elevation-1" alt="No Image" />
         
        </li>
        
      </li>
       
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">Etienne NTAMBARA</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-user mr-2" /> Profile
            
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-cog mr-2" /> Change Password
            
          </a>
          <div className="dropdown-divider" />
          <Link to="logout" className="dropdown-item">
            <i className="fas fa-sign-out-alt mr-2" /> Logout
            <span className="float-right text-muted text-sm">2 days</span>
          </Link>
         
        </div>
      </li>
   
      {/* <li className="user-panel mt-2 pb-2 mb-2 d-flex">
        <li className="image">
          <img src="dist/img/etienno.jpg" className="img-circle elevation-2" alt="User Image" />
        </li>
        
      </li> */}
    </ul>
  </nav>
                
            </div>
        )
    }
}
