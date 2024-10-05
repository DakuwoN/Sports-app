import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <nav>
        <ul>
          <Header/>
          
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;