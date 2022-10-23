import './App.css';
import { Account } from "./components/exportPages";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react';
import { Landing, Login, NavigationBar, Footer, Profile, CreateLease, Explore } from './components/exportPages';
import { AuthProvider } from './components/Authentication/AuthProvider';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <main>
          <Explore/>

            {/* <div className="content">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Account />} />
                <Route path="/createlease" element={<CreateLease />} />
              </Routes>
            </div> */}
          </main>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
