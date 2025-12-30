import "./ChartView.css";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const COLORS = ["#3B82F6", "#F59E0B", "#84CC16", "#EF4444"];

const ChartView = ({ data = [], type, groupBy, metric }) => {
  if (!data.length || !groupBy || !metric) return null;

  const map = {};
  data.forEach((row) => {
    const key = row[groupBy];
    const value = Number(row[metric]) || 0;
    map[key] = (map[key] || 0) + value;
  });

  const labels = Object.keys(map);
  const values = Object.values(map);

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false, //  stops requestAnimationFrame loop
    plugins: {
      legend: {
        labels: {
          color: "#374151",
          font: { size: 12 },
        },
      },
    },
    scales:
      type === "bar"
        ? {
            x: {
              ticks: { color: "#6B7280" },
              grid: { display: false },
            },
            y: {
              ticks: { color: "#6B7280" },
              grid: { color: "#E5E7EB" },
            },
          }
        : {},
  };

  if (type === "bar") {
    return (
      <div className="chart-wrapper">
        <Bar
          key={`bar-chart`}
          data={{
            labels,
            datasets: [
              {
                label: metric,
                data: values,
                backgroundColor: COLORS,
                borderRadius: 6,
              },
            ],
          }}
          options={commonOptions}
        />
      </div>
    );
  }

  if (type === "pie") {
    return (
      <div className="chart-wrapper">
        <Pie
          key={`pie-chart`}
          data={{
            labels,
            datasets: [
              {
                data: values,
                backgroundColor: COLORS,
              },
            ],
          }}
          options={commonOptions}
        />
      </div>
    );
  }

  return null;
};

export default ChartView;
