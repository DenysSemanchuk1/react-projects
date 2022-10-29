import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { handlePage, page, nbPages, isLoading } = useGlobalContext();
  if (isLoading) return null;
  return (
    <div className='btn-container'>
      <button onClick={() => handlePage("dec")}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => handlePage("inc")}>next</button>
    </div>
  );
};

export default Buttons;
