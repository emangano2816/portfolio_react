import React from 'react';
import '../Header/style.css';
import List from '../List';

function Header(){
    return (
        <header class="header-container background-image">
            <div class="hide">
                <span class="background-image" role="img" aria-label="Image of multi-dimensional gears"></span>
            </div>
            <div class="name">
                <h1>Elizabeth Mangano</h1>
            </div>

            <div class="catch-phrase">
                <h2>Multi-Dimensional Perspective</h2>
                <h3>for Modern Day Development</h3>
            </div>

            <nav class="nav-container">
                <List/>
            </nav>
        </header>
    )
}

export default Header;