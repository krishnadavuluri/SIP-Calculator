import React, { Component } from "react";
import Chart from "react-apexcharts";
export default class SipChart extends React.Component {
    constructor(props) {
        console.log("Called")
      super(props);

      this.state = {
        
        series: [this.props.data.investment, this.props.data.returns],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Invested amount', 'Est. returns'],
          dataLabels: {
            enabled: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
            //   chart: {
            //     width:200
            //   },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

    componentDidMount()
    {
        console.log("Mount")
    }

    render() {
        console.log("Render called")
      return (
         <div id="chart">
           <Chart options={this.state.options} series={[this.props.data.investment,this.props.data.returns]}
            type="donut" height={400} />
        </div>
      );
    }
  }