const Filter = ({ filterValue, handleSearch }) => {
  return (
    <div className="filter">
      <p>Find Contact by name</p>
      <input
        type="text"
        placeholder="Search..."
        value={filterValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Filter;
