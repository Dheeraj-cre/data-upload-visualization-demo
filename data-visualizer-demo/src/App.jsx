import React, { useState, useEffect, useRef } from "react";
import FileUpload from "./components/FileUpload";
import ChartView from "./components/ChartView";
import DataTable from "./components/DataTable";
import { getColumns } from "./utils/getColumns";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [groupBy, setGroupBy] = useState("");
  const [metric, setMetric] = useState("");
  const [docName, setDocName] = useState("");

  const initializedRef = useRef(false);

  // Extract columns once per upload
  useEffect(() => {
    if (!data.length || initializedRef.current) return;

    const cols = getColumns(data);
    setColumns(cols);
    setGroupBy(cols[0]);
    setMetric(cols.find((c) => !isNaN(data[0][c])));

    initializedRef.current = true;
  }, [data]);

  // 🔹 Dynamic width based on data size
  const tableSpanClass =
    data.length > 25 ? "wide-full" :
    data.length > 10 ? "wide" :
    "";

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Correl</h2>

        <div className="upload-card">
          <div className="upload-icon"></div>
          <h3>Upload Data</h3>
          <p>Import your data to build custom dashboards.</p>

          <FileUpload
            onDataLoaded={(newData, fileName) => {
              initializedRef.current = false;
              setData(newData);

              // 🔹 Format document name
              setDocName(
                fileName
                  ?.replace(/\.(csv|xlsx)$/i, "")
                  .replace(/[_-]/g, " ")
              );
            }}
          />

          {columns.length > 0 && (
            <div className="filter-box">
              <label>Group By</label>
              <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
                {columns.map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </select>

              <label>Metric</label>
              <select value={metric} onChange={(e) => setMetric(e.target.value)}>
                {columns.map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <header className="topbar">
          <h1>Sample Dashboard</h1>
        </header>

        {data.length > 0 && (
          <div className="grid">
            <div className="card chart-card">
              <h3>{metric} by {groupBy}</h3>
              <ChartView
                key={`bar-${groupBy}-${metric}`}
                data={data}
                groupBy={groupBy}
                metric={metric}
                type="bar"
              />
            </div>

            {/*  DYNAMIC DATA CARD */}
            <div className={`card table-card ${tableSpanClass}`}>
              <h3>{docName || "Dataset"}</h3>
              <DataTable data={data} />
            </div>

            <div className="card pie-card wide">
              <h3>{metric} Distribution</h3>
              <ChartView
                key={`pie-${groupBy}-${metric}`}
                data={data}
                groupBy={groupBy}
                metric={metric}
                type="pie"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
