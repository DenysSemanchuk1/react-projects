import React, { useState, useEffect } from "react";

const SingleColor = ({ hexValue, weight, index }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 ? "color-light" : ""}`}
      style={{ backgroundColor: hexValue }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>Coppied to clipboard!</p>}
    </article>
  );
};

export default SingleColor;
