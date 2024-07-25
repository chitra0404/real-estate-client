const PropertyEditForm = ({ property, setProperty, handleEditSubmit }) => (
    <section className="vh-50 vw-50 pt-5 mt-5">
        <div className="d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 justify-content-center align-items-center">
                        <div className="card" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-4">
                                <h2 className="text-uppercase text-center mb-4">
                                    Edit Property Details
                                </h2>

                                <form onSubmit={(e) => handleEditSubmit(e, property)}>
                                    <div className="row g-3 align-items-center">
                                        <label htmlFor="name" className='col-auto'>Name:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="col-auto"
                                            placeholder="Enter name"
                                            value={property.name}
                                            onChange={(e) => setProperty({ ...property, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="row g-3 align-items-center">
                                        <label htmlFor="property_type" className='col-auto'>Property Type:</label>
                                        <input
                                            type="text"
                                            id="property_type"
                                            className="col-auto"
                                            placeholder="Enter property type"
                                            value={property.property_type}
                                            onChange={(e) => setProperty({ ...property, property_type: e.target.value })}
                                        />
                                    </div>

                                    <div className="row g-3 align-items-center">
                                        <label htmlFor="location" className='col-auto'>Location:</label>
                                        <input
                                            type="text"
                                            id="location"
                                            className="col-auto"
                                            placeholder="Enter location"
                                            value={property.location}
                                            onChange={(e) => setProperty({ ...property, location: e.target.value })}
                                        />
                                    </div>

                                    <div className="row g-3 align-items-center">
                                        <label htmlFor="description" className='col-auto'>Description:</label>
                                        <input
                                            type="text"
                                            id="description"
                                            className="col-auto"
                                            placeholder="Enter description"
                                            value={property.description}
                                            onChange={(e) => setProperty({ ...property, description: e.target.value })}
                                        />
                                    </div>

                                    <div className="row g-3 align-items-center">
                                        <label htmlFor="price" className='col-auto'>Price:</label>
                                        <input
                                            type="number"
                                            id="price"
                                            className="col-auto text-end"
                                            placeholder="Enter price"
                                            value={property.price}
                                            onChange={(e) => setProperty({ ...property, price: e.target.value })}
                                        />
                                    </div>

                                    <div className="row g-3 align-items-center">
                                        <label htmlFor="property_status" className='col-auto'>Status:</label>
                                        <select
                                            id="property_status"
                                            className="col-auto text-end"
                                            value={property.property_status}
                                            onChange={(e) => setProperty({ ...property, property_status: e.target.value })}
                                        >
                                            <option value="">Select status</option>
                                            <option value="not sold">Not Sold</option>
                                            <option value="sold">Sold</option>
                                        </select>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button
                                            type="submit"
                                            className="btn btn-light btn-lg btn-block" // Adjust button color to match with blue background
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default PropertyEditForm;
