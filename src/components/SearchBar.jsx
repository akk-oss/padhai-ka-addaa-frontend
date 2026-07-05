import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4">
      <div className="card-body">

        <div className="input-group">

          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search courses, topics..."
          />

        </div>

      </div>
    </div>
  );
}

export default SearchBar;