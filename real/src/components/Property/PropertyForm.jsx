import React from 'react';
import './style.css'

const PropertyForm = ({ property, setProperty, handleSubmit }) => (
    <section className="vh-50 vw-50 pt-5 mt-5 " >
        <div className="card bg-light-color" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
                <h2 className="text-uppercase text-center mb-4">Add Property Details</h2>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-4">
                            <label htmlFor="name" className='form-label'>Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Enter name"
                                value={property.name}
                                onChange={(e) => setProperty({ ...property, name: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="property_type" className='form-label'>Property Type:</label>
                            <input
                                type="text"
                                id="property_type"
                                className="form-control"
                                placeholder="Enter property type"
                                value={property.property_type}
                                onChange={(e) => setProperty({ ...property, property_type: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="location" className='form-label'>Location:</label>
                            <input
                                type="text"
                                id="location"
                                className="form-control"
                                placeholder="Enter location"
                                value={property.location}
                                onChange={(e) => setProperty({ ...property, location: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="row g-3 mt-3">
                        <div className="col-md-4">
                            <label htmlFor="description" className='form-label'>Description:</label>
                            <input
                                type="text"
                                id="description"
                                className="form-control"
                                placeholder="Enter description"
                                value={property.description}
                                onChange={(e) => setProperty({ ...property, description: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="price" className='form-label'>Price:</label>
                            <input
                                type="number"
                                id="price"
                                className="form-control"
                                placeholder="Enter price"
                                value={property.price}
                                onChange={(e) => setProperty({ ...property, price: e.target.value })}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="property_status" className='form-label'>Status:</label>
                            <select
                                id="property_status"
                                className="form-select"
                                value={property.property_status}
                                onChange={(e) => setProperty({ ...property, property_status: e.target.value })}
                            >
                                <option value="">Select status</option>
                                <option value="not sold">Not Sold</option>
                                <option value="sold">Sold</option>
                            </select>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <button
                            type="submit"
                            className="btn btn-dark btn-lg"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
);

export default PropertyForm;
