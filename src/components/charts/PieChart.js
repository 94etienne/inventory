import React from "react";
import {Pie} from "react-chartjs-2";

const PieChart  = () => {
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

    const options ={
        plugins: {
            legend:{
                display: true,
                position: "bottom"
            },
            title:{
                text: "Hello Chart",
                display: true,
                fontSize: 20
            }
        }
    }
    return (
        <div>
            <Pie
             data={state}
             options={options}
             />

        
            <p>Bar Chart</p>
        </div>
    )
}

export default PieChart;