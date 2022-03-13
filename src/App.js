import './App.css';
//import Layout from './components/pages/Layout';
import { ThemeProvider ,createTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Navbar from './components/static/Navbar';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ShowRoom from './components/pages/ShowRoom';

//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './components/pages/Home';
//import About from './components/pages/About';
//import Navbar from './components/static/Navbar';

const theme = createTheme({
    palette: {
      primary: {
        main: purple[200]
      }
    }
})



function App() {

  /* <ThemeProvider theme={theme}>
        <Container>
          <Navbar2 />
        </Container>
      </ThemeProvider> 
    */

  return (
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About /> } /> 
          <Route path="Showroom" element={<ShowRoom /> } />
        </Routes>
      </ThemeProvider>
  );
}

export default App;
