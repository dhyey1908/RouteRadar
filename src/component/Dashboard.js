
import React from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import Map from '../component/Map';
import './Dashboard.css'

function Dashboard() {

    return (
        <>
            <div className="app">
                <div className="navbar">
                    <Header />
                </div>
                <div className="main">
                    <Sidebar />
                    <div className='map'>
                        <Map />
                    </div>
                </div>
            </div >
        </>
    );
}

export default Dashboard;

