import "./ExportMock.css";

const ExportMock = ({ docName }) => {
  return (
    <div className="export-box">
      <button className="export-btn" disabled>
         Export {docName || "Document"} to Word (Demo)
      </button>
      <p className="export-note">
        Full Word export will be implemented in the final version.
      </p>
    </div>
  );
};

export default ExportMock;
