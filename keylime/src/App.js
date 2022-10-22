import './App.css';
import { Account} from "./components/exportPages";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import { Landing, Login, NavigationBar } from './components/exportPages';

function App() {
  return (
    <HashRouter>
      <main>
        <div className="content">
          <Routes>
            <Route path="/" element={<Account />} />
          </Routes>
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
