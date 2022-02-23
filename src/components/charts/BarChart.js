import React from "react";
import {Bar} from "react-chartjs-2";

const BarChart  = () => {
    const state = {
        labels: [
            "January","February","March","April","May"
        ],
        datasets: [{
            label:"Rainfall",
            backgroundColor:"rgba(75,192,192,1)",
            borderColor:"rgba(0,0,0,1)",
            borderWidth: "2",
            data: [65,45,125,42,43]
        }]
    }
    return (
        <div>
            <Bar data={state}/>

        
            <p>Bar Chart</p>
        </div>
    )
}

export default BarChart;