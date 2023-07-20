import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { format, eachDayOfInterval } from "date-fns";

const Chart = ({ startDate, endDate }) => {
  const initialData = [
    { date: new Date("2023-07-16"), value: 1 },
    { date: new Date("2023-07-17"), value: 2 },
    { date: new Date("2023-07-18"), value: 3 },
    { date: new Date("2023-07-19"), value: 2 },
    { date: new Date("2023-07-20"), value: 1 },
    { date: new Date("2023-07-25"), value: 1 },
    { date: new Date("2023-07-26"), value: 2 },
    { date: new Date("2023-07-27"), value: 1 },
  ];

  useEffect(() => {
    const mapDataByDate = (data) => {
      const map = {};
      data.forEach((item) => {
        const formattedDate = format(item.date, "yyyy.MM.dd");
        map[formattedDate] = item.value;
      });
      return map;
    };

    const generateChartData = (startDate, endDate, data) => {
      let formattedStartDate = startDate;
      let formattedEndDate = endDate;

      const dateRange = endDate
        ? eachDayOfInterval({
            start: formattedStartDate,
            end: formattedEndDate,
          })
        : [formattedStartDate];
      const mappedData = mapDataByDate(data);

      const chartData = dateRange.map((date) => {
        const formattedDate = format(date, "yyyy.MM.dd");
        return mappedData[formattedDate] || 0;
      });

      const categories = dateRange.map((date) => format(date, "yyyy.MM.dd"));

      return {
        series: [
          {
            name: "view",
            data: chartData,
          },
        ],
        categories: categories,
      };
    };

    const newData = generateChartData(startDate, endDate, initialData);
    setChartData(newData);
  }, [startDate, endDate]);

  const [chartData, setChartData] = useState(null);

  return (
    <div
      style={{
        height: 253,
        borderTop: "1px solid #EBEFF4",
        paddingTop: 15,
        minWidth: 500,
      }}
    >
      {chartData && (
        <ReactApexChart
          options={{
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
            colors: ["#5100CE"],
            yaxis: {
              opposite: true,
              forceNiceScale: true,
            },
            xaxis: {
              type: "datetime",
              categories: chartData.categories,
              labels: {
                formatter: function (value, timestamp, index) {
                  return format(new Date(timestamp), "yyyy.MM.dd");
                },
              },
            },
          }}
          series={chartData.series}
          type="area"
          height={215}
        />
      )}
    </div>
  );
};

export default Chart;
