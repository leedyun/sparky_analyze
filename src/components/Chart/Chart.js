import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { format, eachDayOfInterval } from "date-fns";
import "./Chart.css";

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
    <div className="ChartContainer">
      {chartData && (
        <>
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
                    const date = new Date(timestamp);
                    if (window.innerWidth <= 760) {
                      return format(date, "yy.MM.dd");
                    } else {
                      return format(date, "yyyy.MM.dd");
                    }
                  },
                  style: {
                    fontSize: "13px",
                    "@media screen and (max-width: 760px)": {
                      fontSize: "10px",
                    },
                    "@media screen and (max-width: 480px)": {
                      fontSize: "8px",
                    },
                  },
                },
              },
              tooltip: {
                y: {
                  formatter: function (value) {
                    return `${value}`;
                  },
                },
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                  const date = chartData.categories[dataPointIndex];
                  const value = chartData.series[0].data[dataPointIndex];
                  return (
                    '<div class="arrow_box">' +
                    "<span class='date'>" +
                    date +
                    "</span>" +
                    "<br> " +
                    "<span class='value'>" +
                    value +
                    "</span>" +
                    "</div>"
                  );
                },
                marker: {
                  show: false,
                },
              },
            }}
            series={chartData.series}
            type="area"
            height={215}
          />
        </>
      )}
    </div>
  );
};

export default Chart;
