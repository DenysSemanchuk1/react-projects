import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, openSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar ${openSidebar && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon} {text}
            </a>
          </li>
        ))}
      </ul>

      <ul className='social-icons'>
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
