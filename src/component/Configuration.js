import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../services/getData';
import Header from './Header';
import Sidebar from './Sidebar';
import './Configuration.css';

function VehicleConfigPage() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const data = useSelector((state) => state.auth);
  const userId = data.auth.user.userId;

  useEffect(() => {
    if (userId) {
      fetchVehicleData();
    }
  }, [userId]);

  const fetchVehicleData = async () => {
    try {
      const tableName = 'Cars';
      const allVehicleData = await fetchData(tableName);

      const filteredVehicleData = allVehicleData.filter(
        (vehicle) => vehicle.userId === userId
      );
      setVehicles(filteredVehicleData);
      setSelectedVehicle(filteredVehicleData[0]);
    } catch (error) {
      console.error('Error fetching vehicle data:', error);
    }
  };

  const handleVehicleChange = (event) => {
    const selectedVehicleName = event.target.value;
    const selected = vehicles.find((vehicle) => vehicle.name === selectedVehicleName);
    setSelectedVehicle(selected);
  };

  return (
    <div className="root">
      <div className="App">
        <Header />
        <Sidebar />
      </div>
      <div className="container">
        <div>
          <label>Select a Vehicle:</label>
          <select onChange={handleVehicleChange} value={selectedVehicle ? selectedVehicle.name : ''}>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.name}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
        <div className="vehicle-details">
          <h2>Vehicle Data</h2>
          {selectedVehicle && (
            <>
              <p>
                <strong>Name:</strong> {selectedVehicle.name}
              </p>
              <p>
                <strong>Color:</strong> {selectedVehicle.color}
              </p>
              <p>
                <strong>Mileage:</strong> {selectedVehicle.mileage}
              </p>
              <p>
                <strong>Model No:</strong> {selectedVehicle.modelNo}
              </p>
              <p>
                <strong>Model Year:</strong> {selectedVehicle.modelYear}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default VehicleConfigPage;
