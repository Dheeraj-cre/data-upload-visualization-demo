import Papa from "papaparse";
import * as XLSX from "xlsx";

export const parseFile = (file, callback) => {
  if (typeof callback !== "function") {
    console.error("parseFile error: callback is not a function");
    return;
  }

  const ext = file.name.split(".").pop().toLowerCase();

  if (ext === "csv") {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => callback(results.data),
    });
  }

  if (ext === "xlsx") {
    const reader = new FileReader();
    reader.onload = (e) => {
      const wb = XLSX.read(e.target.result, { type: "array" });
      const sheet = wb.Sheets[wb.SheetNames[0]];
      callback(XLSX.utils.sheet_to_json(sheet));
    };
    reader.readAsArrayBuffer(file);
  }
};
