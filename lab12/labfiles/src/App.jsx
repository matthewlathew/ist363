import { useState } from 'react';

import Homepage from './Homepage';
import Elizabeth from './Elizabeth';
import Tim from './Tim';
import Ray from './Ray';

import './index.css';

function App() {
  const [page, setPage] = useState('homepage');
  return (
    <div>
      {page === 'homepage' && <Homepage setPage={setPage} />}
      {page === 'elizabeth' && <Elizabeth setPage={setPage} />}
      {page === 'ray' && <Ray setPage={setPage} />}
      {page === 'tim' && <Tim setPage={setPage} />}
    </div>
  )
}

export default App;