import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const initialChartData = {
    series: [
      {
        name: "view",
        data: [0, 0, 0, 0, 3, 2],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "line",
        zoom: {
          enabled: false,
        },
        colors: ["rgba(81, 0, 206, 0.1)"],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["transparent"],
          opacity: 1,
        },
      },
      colors: ["rgba(81, 0, 206, 1)"],
      yaxis: {
        opposite: true,
        forceNiceScale: true,
      },
    },
  };

  const [chartData] = useState(initialChartData);

  return (
    <div
      style={{ height: 253, borderTop: "1px solid #EBEFF4", paddingTop: 10 }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={215}
        width={1050}
      />
    </div>
  );
};

export default Chart;
