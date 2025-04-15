import { useState } from 'react';

import Homepage from './Homepage';
import Elizabeth from './Elizabeth';
import Tim from './Tim';
import Ray from './Ray';

import './index.css';

export default function App() {
  let [page, setPage] = useState('home');

  function renderPage() {
    if (page === 'elizabeth') return <Elizabeth />;
    if (page === 'tim') return <Tim />;
    if (page === 'ray') return <Ray />;
    return <Homepage />;
  }

  return (
    <div>
      <div className="nav">
        <div onClick={() => setPage('home')}>Home</div>
        <div onClick={() => setPage('elizabeth')}>Elizabeth J. Feinler</div>
        <div onClick={() => setPage('tim')}>Tim Berners-Lee</div>
        <div onClick={() => setPage('ray')}>Ray Tomlinson</div>
      </div>

      <div className="page-content">
        {renderPage()}
      </div>
    </div>
  );
}