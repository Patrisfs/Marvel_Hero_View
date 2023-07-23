import {Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Header from './components/pages/Header';
import Home from './components/pages/home/Home';
import Description from './components/pages/description/Description';

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
