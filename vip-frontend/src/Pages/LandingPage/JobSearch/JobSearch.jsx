import React from 'react';
import './JobSearch.css'
const JobSearch = () => {
  return (
    <div className="job-search">
      <h1>Explore open career opportunities.</h1>
      <p>We commit to exceptional company culture and outstanding benefits.</p>
      <div className="search-box">
        <input type="text" placeholder="Find the job that best suits you." />
        <select>
          <option>Philippines</option>
          <option>New Zealand</option>
          <option>Canada</option>
        </select>
        <button className="search-btn">Search</button>
      </div>
      <div className="cta-buttons">
        <button className="cta-btn">Discover Recent News</button>
        <button className="cta-btn">Know our process</button>
      </div>
    </div>
  );
};

export default JobSearch;
