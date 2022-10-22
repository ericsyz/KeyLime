import './App.css';
import { Account} from "./components/exportPages";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import { Landing, Login, NavigationBar } from './components/exportPages';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <main>
          <div className="content">
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
            <Routes>
            </Routes>
          </div>
        </main>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
