import React from 'react';
import './style2.css'; 

function Dashboard({ user }) {
    return (
        <div className="dashboard-container">
            {user.isAdmin ? (
                <div className="admin-dashboard">
                    <h1>Admin Dashboard</h1>
                    <p>Welcome, <strong>{user.name}</strong>. You have admin privileges.</p>
                    <div className="admin-actions">
                        <button className="action-button">Add New Users</button>
                        <button className="action-button">Manage Users</button>
                        <button className="action-button">Manage Settings</button>
                        <button className="action-button">View Reports</button>
                    </div>
                </div>
            ) : (
                <div className="guest-dashboard">
                    <h1>Guest Dashboard</h1>
                    <p>Welcome, <strong>{user.name}</strong>. You are not an admin.</p>
                    <div className="guest-actions">
                        <button className="action-button">Update Profile Information</button>
                        <button className="action-button">Settings</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
