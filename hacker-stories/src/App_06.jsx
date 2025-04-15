import { useState } from "react";
import About from './About'
// ./ means same folder as the App.jsx file


//conditional rendering aka navigating SPAs (single page web applications)
function App () {
  const [page, setPage] = useState('home');
  return (
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link">onClick={() => setPage('home')}Home</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link">onClick={() => setPage('about')}About</a>
      </li>
      <h1>Home Page</h1>
      {page === 'home' && <Home />}
      {page === 'about' && <About />}
    </ul>
  );
}

function Home () {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;