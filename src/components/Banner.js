import React from 'react';
import '../styles/Banner.css';

function Banner() {
  return (
    <header className="Banner">
      <div className="Banner-content">
        <img src="[Your Profile Picture URL]" alt="Profile Picture" className="Banner-profile-picture" />
        <h1 className="Banner-name">[Your Name]</h1>
        <p className="Banner-tagline">[Your Tagline]</p>
      </div>
    </header>
  );
}

export default Banner;