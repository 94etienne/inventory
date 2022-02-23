
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

import "./dashboard.css";

export default class Dashboard extends Component {
  

    render() {
      const data = [
        { name: "Facebook", users: 200 },
        { name: "Instagram", users: 1500 },
        { name: "Twiter", users: 1000 },
        { name: "Telegram", users: 500 },
      ];
        return (
            <div>
  <div className="content-wrapper bg-white">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
           
               <li className="breadcrumb-item ">
                <Link to="/Dashboard" className="link">Home</Link></li>
              <li className="breadcrumb-item active">My Dashboard</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
        <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h4>Total Assets (150)</h4>
                <Link to="/registeredAssetReport" className="link  text-dark">Working <span className="float-right text-dark">(80)</span> </Link> <br/>
                
                <Link to="/destroyed" className="link text-dark">Destroyed <span className="float-right text-dark">(70)</span></Link>
                <br/>
                <Link to="/maintainceAssetReport" className="link text-dark">Maintained <span className="float-right text-dark">(70)</span></Link>
              
              </div>
             
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h4>Total Assets (150)</h4>
                <Link to="/assetRenting" className="link  text-dark">Rent <span className="float-right text-dark">(80)</span> </Link> <br/>
                <Link to="/allReturnedAssets" className="link text-dark">Returned <span className="float-right text-dark">(70)</span></Link>
              </div>
             
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h4>Total Assets (150)</h4>
                <Link to="/custodianAssignedAssetReport" className="link  text-dark">Assigned to Custodian <span className="float-right text-dark">(80)</span> </Link> <br/>
                <Link to="/custodianAssignedAssetReport" className="link text-dark">Not Assignemd <span className="float-right text-dark">(70)</span></Link>
              </div>
             
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
         
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h4>Total Assets (150)</h4>
                <Link to="/movementReport" className="link  text-dark">Movement <span className="float-right text-dark">(80)</span> </Link> <br/>
                <Link to="/movementReport" className="link text-dark">Not Moved <span className="float-right text-dark">(70)</span></Link>
              </div>
             
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
         
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-white">
              <div className="inner">
                <h4>Total Suppliers (10)</h4>
                <Link to="/suppliersReport" className="link  text-dark">Working <span className="float-right text-dark">(80)</span> </Link> <br/>
                <Link to="/suppliersReport" className="link text-dark">Not Working <span className="float-right text-dark">(70)</span></Link>
              </div>
             
              <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
          </div>
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
{/* Left CARD */}


          <section className="col-lg-6 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
              <div className="card-header bg-white">
                <h3 className="card-title ">
                  <i className="fas fa-chart-pie mr-1" />
                  Pie Charts
                </h3>
               
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                Hello Content Body 
                
                {/* chart */}
                
                {/* end chart */}
                </div>
              </div>{/* /.card-body */}
            </div>
            {/* /.card */}        

          </section>




          {/*  Right  CARD*/}
          {/* /.Left col */}
          {/* right col (We are only adding the ID to make the widgets sortable)*/}
         
          <section className="col-lg-6 connectedSortable">
            {/* Custom tabs (Charts with tabs)*/}
            <div className="card">
              <div className="card-header bg-white">
                <h3 className="card-title">
                  <i className="fas fa-chart-pie mr-1" />
                  Pie Chart
                </h3>
              
              </div>{/* /.card-header */}
              <div className="card-body">
                <div className="tab-content p-0">
                Hello Content Body 
                
                <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill={
              '#B21F00',
              '#C9DE00',
              '#2FDE00',
              '#00A6B4',
              '#6800B4'
            }
            label
            
          />
          <Tooltip />
        </PieChart>
       
                </div>
              </div>{/* /.card-body */}
            </div>
            {/* /.card */}        

          </section>

          {/* right col */}
        </div>
        {/* /.row (main row) */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  
</div>
        )
    }
}
