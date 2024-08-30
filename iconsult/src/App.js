import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import HomePage from './HomePage';
import './App.css';

function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="main-content">
                <Header />
                <HomePage />
            </div>
        </div>
    );
}

export default App;
