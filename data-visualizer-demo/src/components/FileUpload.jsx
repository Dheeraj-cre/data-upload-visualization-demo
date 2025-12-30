import "./FileUpload.css";
import { parseFile } from "../utils/parseFile";

const FileUpload = ({ onDataLoaded }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    parseFile(file, (parsedData) => {
      onDataLoaded(parsedData, file.name); //  pass file name
    });
  };

  return (
    <label className="file-upload">
      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={handleChange}
        hidden
      />
      <span className="upload-btn"> Choose File</span>
      <span className="upload-hint">CSV or Excel only</span>
    </label>
  );
};

export default FileUpload;
