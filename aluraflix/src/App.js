import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NewVideo from './components/NewVideo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-video" element={<NewVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
