
import './App.css';
import { Home } from './component/Home/Home';
import { About } from './component/about/About';
import { Footer } from './component/footer/Footer';
import { Header } from './component/header/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Project } from './component/projects/Project';
function App() {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/About' element={<About/>}/>
          <Route path='/Project' element={<Project/>}/>  
      </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
