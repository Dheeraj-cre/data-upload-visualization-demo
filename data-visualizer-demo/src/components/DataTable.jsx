import "./DataTable.css";

const DataTable = ({ data = [] }) => {
  if (!data.length) return null;

  const columns = Object.keys(data[0]);

  return (
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th>S.No</th>
            {columns.map((col) => (
              <th key={col}>{col.replace("_", " ")}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
