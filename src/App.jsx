import './App.css'
import Navabar from "./components/Navabar";
import Contact from './components/Contact';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Blog from './components/Blog';
import ThemeProvider from './components/ThemeProvider';


function App() {
  
  return (
    <>
    <ThemeProvider>
    <Navabar/>
    <Routes>
    <Route path='/' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/Blog' element={<Blog />}></Route>
      
    </Routes>
    
    {/* <Name></Name> */}
    </ThemeProvider>

    </>
  )
}

export default App;
