import React from 'react';
import axios from 'axios';
import { Base_Url } from '../../api/api';
import './style.css'

const PropertyList = ({ filteredProperties, handleDeleteProperty, fetchProperties, handleEditClick }) => {

    const handleStatusChange = async (propertyId, newStatus) => {
        const token = localStorage.getItem('tokenAuth');
        const config = { headers: { "x-auth-token": token } };

        try {
            await axios.put(`${Base_Url}/api/${propertyId}`, { property_status: newStatus }, config);
            fetchProperties();
        } catch (error) {
            console.error("Error updating status", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Property List</h2>
            <div className="row">
                {filteredProperties.map((item) => (
                    <div key={item._id} className="col-md-6 mb-4">
                        <div className="card bg-light-color">
                            <div className="card-body">
                                <p><strong>Name:</strong> {item.name}</p>
                                <p><strong>Type:</strong> {item.property_type}</p>
                                <p><strong>Location:</strong> {item.location}</p>
                                <p><strong>Description:</strong> {item.description}</p>
                                <p><strong>Price:</strong> ${item.price}</p>
                                <p>
                                    <strong>Status:</strong>
                                    <select
                                        value={item.property_status}
                                        onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                        className="ms-2"
                                    >
                                        <option value="not sold">Not Sold</option>
                                        <option value="sold">Sold</option>
                                    </select>
                                </p>
                                <button className="btn btn-primary me-2" onClick={() => handleEditClick(item)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDeleteProperty(item._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyList;
