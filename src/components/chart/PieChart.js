import React from "react";
import Chart from "react-apexcharts";

const SimplePieChart = () => {
  const options = {
    chart: {
      type: 'pie',
      height: 350,
    },
    labels: ['Leads Open', 'Leads Won', 'Leads Lost'], // Labels for the pie slices
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `${val} Leads`, // Customize tooltip format
      },
    },
  };

  const series = [44, 55, 41]; // Sample data corresponding to the labels

  return (
    <div>
      {/* <h2>Lead Status Distribution</h2> */}
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default SimplePieChart;