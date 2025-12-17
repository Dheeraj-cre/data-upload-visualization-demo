import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ChartView = ({ data }) => {
  if (!data || data.length === 0) return null;

  const labels = data.map((item) => item.Date);
  const values = data.map((item) => Number(item.Sales));

  const chartData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: values,
        backgroundColor: "#4f46e5",
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default ChartView;
