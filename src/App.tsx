import { useState } from 'react'
import './App.css'

function App() {
  
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className="app">
      <nav>Navbar</nav>
      <main>Main</main>
      <div id='sidebar'>
        <span onClick={() => setMenuVisible(!menuVisible)}>Menu</span>
        {menuVisible && 
          <div id='sidebar__content'>
            <ul>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li> 
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li> 
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li>
              <li>Tak</li> 
            </ul>
          </div>
        }
      </div>
      <footer>Footer</footer>
    </div>
  )
}

export default App
