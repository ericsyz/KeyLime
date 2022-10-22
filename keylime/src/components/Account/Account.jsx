import { React, useState } from "react";
import { ChakraProvider, Input, Container, extendTheme, Center, FormControl, FormLabel, Button} from '@chakra-ui/react'
import { loginWithEmailAndPassword } from "../../firebase";

const theme = extendTheme({
    textStyles: {
      h1: {
        // you can also use responsive styles
        fontSize: ['48px', '72px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-2%',
      },
      h2: {
        fontSize: ['36px', '48px'],
        fontWeight: 'semibold',
        lineHeight: '110%',
        letterSpacing: '-1%',
      },
    },
  })
  
  

export function Account(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ChakraProvider>
            <Container marginTop={40} color = 'green'>
                <Center textStyle = 'h2'>Welcome!</Center>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input 
                        type='email' 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormLabel>Password</FormLabel>
                    <Input type='password' />
                    <Button colorScheme='teal'
                        onClick={() => {
                            
                        }}
                    >Submit</Button>
                </FormControl>
            </Container>
        </ChakraProvider>
    )

}