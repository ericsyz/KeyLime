import './App.css';
import { Account } from "./components/exportPages";
import { BrowserRouter, HashRouter, NavLink, Route, Routes } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import { Landing, Login, NavigationBar, Leasing} from './components/exportPages';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <main>
          <div className="content">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Account />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
      <Leasing/>
    </ChakraProvider>

  );
}

export default App;
