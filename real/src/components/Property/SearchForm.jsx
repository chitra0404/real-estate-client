const SearchForm = ({ searchCriteria, handleSearchChange }) => (
    <div className="container mt-4">
        <h2>Search Properties</h2>
        <div className="row g-3">
            <div className="col">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    name="price"
                    value={searchCriteria.price}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    name="location"
                    value={searchCriteria.location}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="col">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Property Type"
                    name="property_type"
                    value={searchCriteria.property_type}
                    onChange={handleSearchChange}
                />
            </div>
        </div>
    </div>
);

export default SearchForm
