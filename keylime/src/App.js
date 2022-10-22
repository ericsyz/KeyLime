import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Landing, Login, NavigationBar } from './components/exportPages';

function App() {
  return (
    <ChakraProvider>
      <NavigationBar />
        <Login />
    </ChakraProvider>
  );
}

export default App;
