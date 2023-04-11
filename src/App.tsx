import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import './App.css'

function App() {

  return (
    <div className="root">
      <Header/>
      <Main/>
      <Sidebar/>
      <Footer/>
    </div>
  )
}

export default App
