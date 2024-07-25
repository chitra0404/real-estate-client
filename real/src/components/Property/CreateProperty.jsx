import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Base_Url } from '../../api/api';
import PropertyForm from './PropertyForm';
import SearchForm from './SearchForm';
import PropertyList from './PropertyList';
import PropertyEditForm from './PropertyEditForm';
import './style.css';
import { useNavigate } from 'react-router-dom';

function CreateProperty() {
    const navigate=useNavigate();
    const [submit, setSubmit] = useState(false);
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [property, setProperty] = useState({
        name: "",
        property_type: "",
        location: "",
        description: "",
        price: "",
        property_status: ""
    });
    const [searchCriteria, setSearchCriteria] = useState({
        price: "",
        location: "",
        property_type: ""
    });
    const [editingProperty, setEditingProperty] = useState(null);

    useEffect(() => {
        fetchProperties();
    }, []);

    useEffect(() => {
        const filtered = properties.filter(item => {
            return (
                (searchCriteria.price === "" || item.price === parseInt(searchCriteria.price)) &&
                (searchCriteria.location === "" || item.location.toLowerCase().includes(searchCriteria.location.toLowerCase())) &&
                (searchCriteria.property_type === "" || item.property_type.toLowerCase().includes(searchCriteria.property_type.toLowerCase()))
            );
        });
        setFilteredProperties(filtered);
    }, [searchCriteria, properties]);

    const fetchProperties = async () => {
        try {
            const res = await axios.get(`${Base_Url}/api/getprop`);
            setProperties(res.data.message);
            setFilteredProperties(res.data.message);
        } catch (error) {
            console.error("Error fetching properties", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmit(true);

        const token = localStorage.getItem('tokenAuth');
        const config = { headers: { "x-auth-token": token } };

        try {
            const res = await axios.post(`${Base_Url}/api/create`, property, config);

            if (res.status === 200) {
                setProperty({
                    name: "",
                    property_type: "",
                    location: "",
                    description: "",
                    price: "",
                    property_status: ""
                });
                fetchProperties();
            }
        } catch (error) {
            console.error("Error submitting form", error);
        }
    };

    const handleDeleteProperty = async (propertyId) => {
        const token = localStorage.getItem('tokenAuth');
        const config = { headers: { "x-auth-token": token } };

        try {
            const res = await axios.delete(`${Base_Url}/api/${propertyId}`, config);
            if (res.status === 200) {
                setProperties(prevProperties => prevProperties.filter(property => property._id !== propertyId));
                setFilteredProperties(prevProperties => prevProperties.filter(property => property._id !== propertyId));
            }
        } catch (error) {
            console.error("Error deleting property", error);
        }
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria({
            ...searchCriteria,
            [name]: value
        });
    };

    const handleEditClick = (property) => {
        setEditingProperty(property);
    };

    const handleEditSubmit = async (event, updatedProperty) => {
        event.preventDefault();
        const token = localStorage.getItem('tokenAuth');
        const config = { headers: { "x-auth-token": token } };

        try {
            const res = await axios.put(`${Base_Url}/api/${updatedProperty._id}`, updatedProperty, config);

            if (res.status === 200) {
                setEditingProperty(null);
                fetchProperties();
            }
        } catch (error) {
            console.error("Error updating property", error);
        }
    };
    const handleLogout=()=>{
        localStorage.removeItem("tokenAuth");
       
       navigate("/")
       
      }

    return (
        <div className='vw-100 bg-light-color'>
            <h2>Real Estate Management</h2>
      <div className="d-flex justify-content-end">
    <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
</div>

            <PropertyForm 
                property={property} 
                setProperty={setProperty} 
                handleSubmit={handleSubmit} 
            />
            <SearchForm 
                searchCriteria={searchCriteria} 
                handleSearchChange={handleSearchChange} 
            />
            {editingProperty ? (
                <PropertyEditForm 
                    property={editingProperty} 
                    setProperty={setEditingProperty} 
                    handleEditSubmit={handleEditSubmit} 
                />
            ) : (
                <PropertyList 
                    filteredProperties={filteredProperties} 
                    handleDeleteProperty={handleDeleteProperty} 
                    fetchProperties={fetchProperties}
                    handleEditClick={handleEditClick} 
                />
            )}
        </div>
    );
}

export default CreateProperty;
