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

const ChartView = ({ data = [], type }) => {
  if (!data.length) return null;

  /* =========================
     SALES BY CATEGORY (BAR)
  ========================= */
  if (type === "bar") {
    const categoryMap = {};

    data.forEach((row) => {
      categoryMap[row.Category] =
        (categoryMap[row.Category] || 0) + Number(row.Sales);
    });

    return (
      <div className="chart-wrapper">
        <Bar
          data={{
            labels: Object.keys(categoryMap),
            datasets: [
              {
                label: "Total Sales",
                data: Object.values(categoryMap),
                backgroundColor: "#4f46e5",
                borderRadius: 8,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }

  /* =========================
     REVENUE BY REGION (PIE)
  ========================= */
  if (type === "pie") {
    const regionMap = {};

    data.forEach((row) => {
      regionMap[row.Region] =
        (regionMap[row.Region] || 0) + Number(row.Sales);
    });

    return (
      <div className="chart-wrapper">
        <Pie
          data={{
            labels: Object.keys(regionMap),
            datasets: [
              {
                data: Object.values(regionMap),
                backgroundColor: [
                  "#3b82f6",
                  "#22c55e",
                  "#f97316",
                  "#ef4444",
                ],
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }

  return null;
};

export default ChartView;
