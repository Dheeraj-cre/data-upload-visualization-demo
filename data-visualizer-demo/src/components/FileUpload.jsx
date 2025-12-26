import "./FileUpload.css";
import { parseFile } from "../utils/parseFile";

const FileUpload = ({ onDataLoaded }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    parseFile(file, onDataLoaded);
  };

  return <input type="file" accept=".csv,.xlsx" onChange={handleChange} />;
};

export default FileUpload;
