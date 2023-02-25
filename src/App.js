import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import './App.css';


function App() {
  return (

    <>

    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
        
    </BrowserRouter>
    </>
   
  );
}

export default App;
