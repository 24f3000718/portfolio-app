import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom'; 
import './App.css'; 
import AboutMe from './AboutMe'; 
import Skills from './Skills'; 
import Achievements from './Achievements'; 
import Contact from './Contact'; 
import Queries from './Queries';
import Projects from './Projects';

function AppContent() {
  const location = useLocation();   

  return (
    <div>
    <div className="App" style={{ textAlign:'right'}}>
      <nav>
        <br></br>
        <div class="name" style={{ textAlign:'left',fontSize: '40px' ,color: '#F2E9E4',fontFamily: 'emoji' ,fontstyle: 'italic',marginLeft: '20px'}}>
          Samreen Kausar
        </div>
        <Link to='/'>About Me</Link> &nbsp;
        <Link to='/Skills' >Skills</Link> &nbsp;
        <Link to='/Achievements' >Achievements</Link> &nbsp;
        <Link to='/Projects'>Projects</Link>&nbsp;
        <Link to='/Contact' >Contact</Link> &nbsp;
        <Link to='/Queries' >Queries</Link>&nbsp;
      </nav>
      <br></br>
      </div>
      <Routes> 
        <Route path='/' element={<AboutMe />} /> 
        <Route path='/Skills' element={<Skills />} /> 
        <Route path='/Achievements' element={<Achievements />} /> 
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Contact' element={<Contact />} /> 
        <Route path='/Queries' element={<Queries />} />
      </Routes> 
      {location.pathname !== '/Queries' && <Queries />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>     
      <AppContent />     
    </BrowserRouter>
  );
}

export default App;