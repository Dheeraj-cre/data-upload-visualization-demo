const ColumnSelector = ({
  categorical,
  numeric,
  xAxis,
  yAxis,
  setXAxis,
  setYAxis,
}) => {
  return (
    <div>
      <label>X-Axis (Category)</label>
      <select value={xAxis} onChange={(e) => setXAxis(e.target.value)}>
        {categorical.map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>

      <label>Y-Axis (Metric)</label>
      <select value={yAxis} onChange={(e) => setYAxis(e.target.value)}>
        {numeric.map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColumnSelector;
