import React from 'react';
import {Link } from 'react-router-dom';

export default function header() {

    const headerStyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px' 
    }

    const linkStyle = {
        color: 'white'
    }

    return (
        <div>
            <header style = {headerStyle}>
                <h1>
                    To Do List 
                </h1>
                <Link style= {linkStyle} to="/">home</Link> | 
                <Link style= {linkStyle} to='/about'> About</Link>
            </header>
        </div>
    )
}

