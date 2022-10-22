import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    submenu.style.left = `${location.center}px`;
    submenu.style.top = `${location.bottom}px`;
  }, [location]);
  return (
    <aside
      ref={container}
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${links.length}`}>
        {links.map(({ label, icon, url }, index) => (
          <a href={url} key={index}>
            {icon}
            {label}
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Submenu;
