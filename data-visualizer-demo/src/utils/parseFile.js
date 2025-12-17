import Papa from "papaparse";
import * as XLSX from "xlsx";

export const parseFile = (file, callback) => {
  const fileType = file.name.split(".").pop();

  if (fileType === "csv") {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        callback(results.data);
      },
    });
  }

  if (fileType === "xlsx") {
    const reader = new FileReader();
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      callback(data);
    };
    reader.readAsArrayBuffer(file);
  }
};
