import React from "react";
import Chart from "react-apexcharts";

const HorizontalBarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: true,
      },
      animations: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded",   // Ensure rounded edges on the right side
        barHeight: '60%',         // Slimmer bars with a gap
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}`, // Show the value inside the bars
      style: {
        colors: ['#fff'],
      },
    },
    xaxis: {
      categories: ["Leads Open", "Leads Won", "Leads Lost"],
      labels: {
        style: {
          colors: ['#4A4A4A'], // Change the color of the labels
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal', // Gradient direction
        shadeIntensity: 0.5,
        gradientToColors: ['#73d13d', '#1890ff', '#ff4d4f'], // Gradient colors
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (val) => `${val} Leads`, // Custom tooltip value format
      },
    },
  };

  const series = [
    {
      name: "Seller",
      data: [3, 2, 1],
    },
    {
      name: "Buyer",
      data: [4, 2, 3],
    },
  ];

  return (
    <div>
      {/* <h2>Lead Status</h2> */}
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default HorizontalBarChart;
