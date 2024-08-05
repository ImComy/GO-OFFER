import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const UserProfile = () => {
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          console.log('User Data from Token:', decodedToken);

          const response = await axios.get('http://localhost:8000/api/user', {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log('User Data from Backend:', response.data);

        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  return <div>User Profile</div>;
};

export default UserProfile;
