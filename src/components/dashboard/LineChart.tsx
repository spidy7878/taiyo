import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Covid-19 Cases Fluctuations",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      min: 0, // Ensure that the y-axis starts from zero
    },
  },
};

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw new Error("Error fetching data");
  }
};

const formatData = (graphData: any) => {
  if (!graphData) return { labels: [], datasets: [] };

  const labels = Object.keys(graphData.cases);
  const datasets = [
    {
      label: "Cases",
      data: Object.values(graphData.cases),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Recovered",
      data: Object.values(graphData.recovered),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Deaths",
      data: Object.values(graphData.deaths),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      yAxisID: "y",
    },
  ];

  return { labels, datasets };
};

const LineChart: React.FC = () => {
  const { data, isLoading, isError } = useQuery("covidData", fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const formattedData = formatData(data);

  return (
    <div>
      <Line options={options} data={formattedData} />
    </div>
  );
};

export default LineChart;
