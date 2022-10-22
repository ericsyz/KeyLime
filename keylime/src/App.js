import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Landing from './pages/Landing';

function App() {
  return (
    <ChakraProvider>
        <Landing />
    </ChakraProvider>
  );
}

export default App;
