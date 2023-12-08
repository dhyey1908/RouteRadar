import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import { useSelector } from 'react-redux';
import { fetchData } from '../services/getData';
import Car from '../img/car.png';
import './Map.css';

function MapComponent(props) {
  const [data, setData] = useState([]);
  const [selectedCar, setSelectedCar] = useState([]);

  const ID = useSelector((state) => state.auth);
  const userId = ID.auth.user.userId;

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        if (userId) {
          const tableName = 'Cars';
          const carData = await fetchData(tableName);

          const filteredVehicleLocation = carData.filter(
            (vehicle) => vehicle.userId === userId
          );
          setData(filteredVehicleLocation);
        }
      } catch (error) {
      }
    };

    fetchCarData();
  }, [userId]);


  const mapStyles = {
    width: '84%',
    height: '87%',
  };

  const center = {
    lat: 23.0225,
    lng: 72.5714,
  };

  const carIcon = {
    url: Car,
    anchor: new props.google.maps.Point(32, 32),
    scaledSize: new props.google.maps.Size(45, 30),
  };

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseInfoWindow = () => {
    setSelectedCar(null);
  };

  return (
    <Map
      google={props.google}
      style={mapStyles}
      initialCenter={center}
    >
      {data.map((car, index) => (
        <Marker
          key={index}
          position={{ lat: car.latitude, lng: car.longitude }}
          icon={carIcon}
          onClick={() => handleCarClick(car)}
        >
          {selectedCar && (
            <InfoWindow
              position={{ lat: selectedCar.latitude, lng: selectedCar.longitude }}
              onClose={handleCloseInfoWindow}
              className="info-window"
            >
              <div>
                <h3>{selectedCar.name}</h3>
                <p>Other car information here...</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmgRZTSsOXUMnq-I5-BxiCO7Bf2zMoxic',
})(MapComponent);
