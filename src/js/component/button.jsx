import React from "react";

const ReloadButton = () => {
  const handleClick = () => {
    window.location.reload(); // Recarga la página
  };

  return (
    <button className="btn btn-dark w-100 rounded-0" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ReloadButton;
