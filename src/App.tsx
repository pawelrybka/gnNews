import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="app">
      <nav>Navbar</nav>
      <main></main>
      <div id='sidebar'>
        <span onClick={toggleSidebar}>Menu</span>
        {(sidebarVisible || screenWidth >= 800) && <div id='sidebar__content'></div>}
      </div>
      <footer>Footer</footer>
    </div>
  )
}

export default App
