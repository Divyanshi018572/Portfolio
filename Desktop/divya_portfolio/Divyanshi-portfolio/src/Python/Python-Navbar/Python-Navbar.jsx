import React, { useState } from 'react';
import './Python-Navbar.css';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prevKey) => (prevKey === key ? null : key));
  };

  const menuItems = [
    {
      title: 'Basic Python Tools',
      key: 'basic-tools',
      links: ['Pandas', 'NumPy', 'MatPlotlib', 'Seaboarn']
    },
   

    {
      title: 'Basic Data Structures',
      key: 'basic',
      links: ['Arrays', 'Linked Lists', 'Stacks', 'Queues']
    },
    {
      title: 'Advanced Data Structures',
      key: 'advanced',
      links: ['Trees', 'Graphs', 'Heaps', 'Hashing']
    },
    {
      title: 'Algorithms',
      key: 'algorithms',
      links: ['Sorting', 'Searching', 'Dynamic Programming', 'Greedy Algorithms']
    },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side: Home button */}
        <div className="navbar-left">
          <a href="#home" className="home-button">Home</a>
        </div>

        {/* Right side: other nav items */}
        <ul className="navbar-right">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="nav-item"
              onMouseEnter={() => toggleDropdown(item.key)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span className="nav-link">
                {item.title}
                <FaChevronDown className="icon" />
              </span>
              {openDropdown === item.key && (
                <ul className="dropdown">
                  {item.links.map((subLink) => (
                    <li key={subLink}>
                      <a href={`#${subLink.toLowerCase().replace(/\s+/g, '-')}`}>
                        {subLink}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          
          <li className="nav-item">
            <a href="#problem-solving" className="nav-link">Practice Questions</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
