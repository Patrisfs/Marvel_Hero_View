import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
