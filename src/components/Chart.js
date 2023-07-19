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
        type: "area",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
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
      colors: ["#5100CE"], // 그라데이션 효과를 제거하고 단일 색상으로 설정
      yaxis: {
        opposite: true,
        forceNiceScale: true,
      },
    },
  };

  const [chartData] = useState(initialChartData);

  return (
    <div
      style={{ height: 253, borderTop: "1px solid #EBEFF4", paddingTop: 15 }}
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={215}
      />
    </div>
  );
};

export default Chart;
