import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import './App.css'

function App() {

  return (
    <div className="root">
      <Provider store={Store}>
        <Header/>
        <Main/>
        <Sidebar/>
        <Footer/>
      </Provider>
    </div>
  )
}

export default App
