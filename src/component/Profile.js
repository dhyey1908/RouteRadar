import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FiEdit } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from '../services/getData';
import { updateData } from '../services/updateData';
import Sidebar from './Sidebar';
import Header from './Header';
import './Profile.css';

function UserProfile() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        gender: '',
        phone: '',
    });

    const [isEditing, setIsEditing] = useState(false);

    const ID = useSelector((state) => state.auth);
    const userId = ID.auth.user.userId;

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            if (userId) {
              const tableName = 'user';
              const userData = await fetchData(tableName);
    
              const user = userData.find((user) => user.userId === userId);
    
              if (user) {
                setUserData({
                  name: user.name || '',
                  email: user.email || '',
                  gender: user.gender || '',
                  phone: user.phone || '',
                });
              } 
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        fetchUserData();
      }, [userId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSave = () => {
        const tableName = 'user';

        const updatedUser = {
            userId: userId,
            name: userData.name,
            email: userData.email,
            gender: userData.gender,
            phone: userData.phone,
        };

        updateData(tableName, userId, updatedUser)
            .then(() => {
                setIsEditing(false);
                toast.success("Profile update successfully")
            })
            .catch((error) => {
                console.error('Error updating user data:', error);
            });
    };

    return (
        <>
            <div className="App">
                <Header />
                <Sidebar />
            </div>
            <div className='containers'>
                <form className="user-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            readOnly={!isEditing}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            disabled={true}
                            className="form-control disabled-email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select
                            name="gender"
                            value={userData.gender}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            className="form-control"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                            readOnly={!isEditing}
                            className="form-control"
                        />
                    </div>
                </form>
                {isEditing ? (
                    <button className='save' onClick={handleSave}>Save</button>
                ) : (
                    <button className='save' onClick={() => setIsEditing(true)}><FiEdit />Edit</button>
                )}
                <ToastContainer/>
            </div >
        </>
    );
}

export default UserProfile;
