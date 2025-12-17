import { useState } from "react";
import FileUpload from "./components/FileUpload";
import DataTable from "./components/DataTable";
import ChartView from "./components/ChartView";
import ExportMock from "./components/ExportMock";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <div className="card">
        <h1>Data Upload & Visualization Demo</h1>
        <p>
          Upload a CSV or Excel file to instantly preview data, generate charts,
          and prepare content for Word export.
        </p>
      </div>

      <div className="card">
        <h3>1. Upload Data File</h3>
        <p>Supported formats: CSV, XLSX</p>
        <FileUpload onDataLoaded={setData} />
      </div>

      {data.length > 0 && (
        <>
          <div className="card">
            <h3>2. Data Preview</h3>
            <p>Showing first 10 rows from the uploaded file.</p>
            <DataTable data={data} />
          </div>

          <div className="card">
            <h3>3. Data Visualization</h3>
            <p>Auto-generated charts based on numeric data.</p>
            <ChartView data={data} />
          </div>

          <div className="card">
            <h3>4. Export to Word</h3>
            <ExportMock />
            <p className="footer-note">
              Editable Word export will be implemented in the full version.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
