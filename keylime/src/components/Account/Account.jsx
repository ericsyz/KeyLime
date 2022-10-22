import { React, useState } from "react";
import { FormHelperText, Input, Text, extendTheme, VStack, FormControl, FormLabel, Button } from '@chakra-ui/react'

import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
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



export function Account() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const emailError = email === ''
  const passwordError = password === ''
  function register(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Worked!");
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <VStack spacing={3}>
      <Text fontSize='5xl'>Create an account.</Text>
      <VStack>
        <form onSubmit={register}>
          <FormControl isInvalid={emailError} isRequired>
            <FormLabel>Email</FormLabel>
            <Input type='email' width='200' value={email} onChange={handleEmailChange} />
            {!emailError ? (<FormHelperText>Enter your email.</FormHelperText>) : (
              <FormHelperText color='red'>Invalid email.</FormHelperText>
            )}
          </FormControl>
          <FormControl as='fieldset' isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='text' width='200' value={password} onChange={handlePasswordChange} />
            {!passwordError ? (<FormHelperText>Enter your password.</FormHelperText>) : (
              <FormHelperText color='red'>Invalid password.</FormHelperText>
            )}
          </FormControl>
          <Button onClick={register} type='submit' colorScheme='blue'>Submit</Button>
        </form>
      </VStack>

    </VStack>
  )

}