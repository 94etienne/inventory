import React, { Component } from 'react'

export default class Chart extends Component {
    render() {
        return (
            <div>
<Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ]}
  options={{
    title: 'My Daily Activities',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
                
            </div>
        )
    }
}
