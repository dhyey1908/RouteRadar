import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from 'react-avatar';
import './Avtar.css';

const ProfilePicture = () => {
  const userEmail = useSelector((state) => state.auth);
  const email = userEmail.auth.user.email;

  const firstLetter = typeof email === 'string' && email.length > 0 ? email.charAt(0).toUpperCase() : '';

  return (
    <div className="profile-picture">
      <Avatar className='avatar' name={firstLetter} size="40" round={true} />
    </div>
  );
}

export default ProfilePicture;
