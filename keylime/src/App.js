import './App.css';
import { Account} from "./components/exportPages";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import { Landing, Login, NavigationBar, Application } from './components/exportPages';

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
    </ChakraProvider>
  );
}

export default App;
