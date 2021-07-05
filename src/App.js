import React from 'react';

import Navbar from './components/layout/Navbar'
import Routing from './Route'
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>

        <Routing />
      </Router>

    </div>
  );
}