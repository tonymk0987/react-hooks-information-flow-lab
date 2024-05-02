// Header.js
import React from 'react';

function Header({ onDarkModeClick }) {
  return (
    <div>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </div>
  );
}

export default Header;
