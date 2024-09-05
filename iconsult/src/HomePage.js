// HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file for styling

function HomePage() {
    return (
        <div className="home-page">
            <div className="sidebar">
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#tasks">Tasks</a></li>
                    <li><a href="#documents">Documents</a></li>
                    <li><a href="#reports">Reports</a></li>
                    <li><a href="#calendar">Calendar</a></li>
                    <li><a href="#create">Create</a></li>
                    <li><a href="#clients">Clients</a></li>
                    <li><a href="#employees">Employees</a></li>
                    <li><a href="#survey">Survey</a></li>
                    <li><a href="#logout">Logout</a></li>
                </ul>
            </div>
            <div className="content">
            
                <h2>Admin Dashboard</h2>
                <h1>Overview</h1>
               
            </div>
        </div>
    );
}

export default HomePage;
