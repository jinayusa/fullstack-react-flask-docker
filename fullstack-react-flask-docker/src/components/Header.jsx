import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css'; // Import CSS module styles for component-specific styling

const Header = () => {
  return (
    <header className={styles.header}>  {/* Apply header styles from the CSS module */}
      <nav>
        <ul>
          {/* List item for the "Map" link */}
          <li>
            <Link to="/map" className={styles.link}>Map</Link>  {/* Link to the map route with custom styles */}
          </li>
          {/* List item for the "Chart" link */}
          <li>
            <Link to="/chart" className={styles.link}>Chart</Link>  {/* Link to the chart route with custom styles */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;  // Export the Header component to be used in other parts of the app
