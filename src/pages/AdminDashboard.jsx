import React, { useState } from 'react';

    function AdminDashboard() {
      const [users, setUsers] = useState([]);
      const [properties, setProperties] = useState([]);
      const [reports, setReports] = useState([]);

      const handleDeleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
      };

      const handleDeleteProperty = (propertyId) => {
        setProperties(properties.filter(property => property.id !== propertyId));
      };

      const handleDeleteReport = (reportId) => {
        setReports(reports.filter(report => report.id !== reportId));
      };

      return (
        <div>
          <h1>Admin Dashboard</h1>
          <h2>Users</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.email}
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <h2>Properties</h2>
          <ul>
            {properties.map(property => (
              <li key={property.id}>
                {property.title}
                <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <h2>Reports</h2>
          <ul>
            {reports.map(report => (
              <li key={report.id}>
                {report.description}
                <button onClick={() => handleDeleteReport(report.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default AdminDashboard;
