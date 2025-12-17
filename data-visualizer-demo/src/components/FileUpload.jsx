import { parseFile } from "../utils/parseFile";

const FileUpload = ({ onDataLoaded }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      parseFile(file, onDataLoaded);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input type="file" accept=".csv,.xlsx" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
