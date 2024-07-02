import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App=()=>{
  return(
    <div >
      <BrowserRouter>
      <div>
      <Header/>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
