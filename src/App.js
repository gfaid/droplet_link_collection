import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import MainLinks from "./MainLinks.js"
import AnotherLinks from "./AnotherLinks.js";
import Notfound from "./Notfound.js"; 

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Main />}></Route>
          <Route path="/mainlink/" element={<MainLinks />}></Route>
          <Route path="/anotherlink/" element={<AnotherLinks />}></Route>
          <Route path="/*/" element={<Notfound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
