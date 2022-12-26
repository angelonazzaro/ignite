import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
