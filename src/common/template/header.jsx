import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className='main-header'>
        <a href="/#/" className='logo'>
        <span className='logo-mini'><b>De</b>C</span>
        <span className='logo-lg'>
            <i className="fa fa-chart-line"></i>
            <b> De</b> Commerce
        </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="/#/" className="sidebar-toggle" data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)