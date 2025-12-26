import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import ChartView from "./components/ChartView";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  // DATA STATE
  const [data, setData] = useState([]);

  // VIEW STATE
  const [view, setView] = useState("all"); // bar | pie | table | all

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Data Visu</h2>

        <div className="upload-card">
          <div className="upload-icon">☁️</div>
          <h3>Upload Data</h3>
          <p>Import your data to build custom dashboards.</p>

          <FileUpload onDataLoaded={setData} />
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        {/* Header */}
        <header className="topbar">
          <h1>Sample Dashboard</h1>

          {/* ACTION BUTTONS */}
          <div className="actions">
            <button onClick={() => setView("bar")} title="Bar Chart">
              📊
            </button>
            <button onClick={() => setView("pie")} title="Pie Chart">
              🕒
            </button>
            <button onClick={() => setView("table")} title="Table">
              📑
            </button>
            <button onClick={() => setView("all")} title="Show All">
              ⚙️
            </button>
          </div>
        </header>

        {/* RECORD COUNT */}
        {data.length > 0 && (
          <p style={{ color: "#64748b", marginBottom: "12px" }}>
            Total Records: <strong>{data.length}</strong>
          </p>
        )}

        {/* Content */}
       <div className="grid">
  {(view === "bar" || view === "all") && (
    <div className="card chart-card">
      <h3>Sales by Category</h3>
      <ChartView data={data} type="bar" />
    </div>
  )}

  {(view === "table" || view === "all") && (
    <div className="card table-card">
      <h3>Sales Data</h3>
      <DataTable data={data} />
    </div>
  )}

  {(view === "pie" || view === "all") && (
    <div className="card pie-card wide">
      <h3>Revenue by Region</h3>
      <ChartView data={data} type="pie" />
    </div>
  )}
</div>

       
      </main>
    </div>
  );
}

export default App;
