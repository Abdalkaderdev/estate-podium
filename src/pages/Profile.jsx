import React from 'react';

    function Profile({ user }) {
      return (
        <div>
          <h1>Welcome, {user.email}</h1>
          <p>Manage your profile and favorite properties here.</p>
        </div>
      );
    }

    export default Profile;
