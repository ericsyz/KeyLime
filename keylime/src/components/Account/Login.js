import { NavigationBar } from '../exportPages';
import { useState } from 'react';
import { Flex, VStack, Text, RadioGroup, Radio, Button, HStack} from '@chakra-ui/react';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const emailError = email === ''
  const passwordError = password === ''

  //const handlePasswordChange = (e) => setPassword(e.target.value)
  //const isPassError = password === ''
  return (
    <VStack spacing={3}>
                <Text fontSize='5xl'>Log into your account</Text>
                <VStack>
                    <FormControl isInvalid={emailError} isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type ='email' width='200' value={email} onChange={handleEmailChange} />
                        {!emailError ? (<FormHelperText>Enter your email.</FormHelperText>) : (
                            <FormHelperText color='red'>Invalid email.</FormHelperText>
                        )}
                    </FormControl>
                    <FormControl as='fieldset' isRequired>
                    <FormLabel>Password</FormLabel>
                        <Input type ='text' width='200' value={password} onChange={handlePasswordChange} />
                        {!passwordError ? (<FormHelperText>Enter your password.</FormHelperText>) : (
                            <FormHelperText color='red'>Invalid password.</FormHelperText>
                        )}
                    </FormControl>
                </VStack>
                <Button type='submit' colorScheme='blue'>Submit</Button>
            </VStack>

  )
}