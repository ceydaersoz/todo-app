import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/partials/Header.jsx'
import Footer from './components/partials/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' Component={HomePage} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
