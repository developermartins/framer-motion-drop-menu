import React, { useState } from 'react';

import './App.css';
import Menu from './Component/Menu/Menu.jsx';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <Menu isOpen={ isOpen } setIsOpen={ setIsOpen } />
    </div>
  );
};

export default App;
