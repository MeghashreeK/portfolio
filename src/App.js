import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dummy from './components/Dummy';

const App=()=>{
  return(
    <div >
      <BrowserRouter>
      {/* <div className='w-screen'>
      <Header/>
      </div> */}
      <Dummy/>
      </BrowserRouter>
    </div>
  )
}

export default App;
