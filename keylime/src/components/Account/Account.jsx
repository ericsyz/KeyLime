import { React, useState } from "react";
import { FormHelperText, Input, Text, extendTheme, VStack, FormControl, FormLabel, Button } from '@chakra-ui/react'

import { auth, registerWithEmailAndPassword } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";


export function Account() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('');;
  const [birthday, setBirthday] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleBirthdayChange = (e) => setBirthday(e.target.value);

  const emailError = email === '';
  const passwordError = password === '';
  const nameError = name === '';
  const birthdayError = birthday === '';
  function register(e) {
    e.preventDefault();
    if (!emailError && !passwordError && !nameError && !birthdayError) {
      registerWithEmailAndPassword(name, birthday, email, password)
      .then((result) => {
        console.log("Worked!");
        navigate('/');
      }).catch((error) => {
        console.log(error);
        alert(error);
      })
    }

  }

  return (
    <VStack spacing={3}>
      <Text fontSize='5xl'>Create an account.</Text>
      {/* <VStack> */}
      <form onSubmit={register}>
        <VStack spacing={3}>
          <FormControl isInvalid={emailError} isRequired>
            <FormLabel>Name</FormLabel>
            <Input type='email' width='200' value={name} onChange={handleNameChange} />
            {!nameError ? (<FormHelperText>Enter your name.</FormHelperText>) : (
              <FormHelperText color='red'>Invalid name.</FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <FormLabel>Birthday</FormLabel>
            <Input type='date' size='sm' value={birthday} onChange={handleBirthdayChange} />
            {!birthdayError ? (<FormHelperText>Enter your birthdate.</FormHelperText>) : (
              <FormHelperText color='red'>Invalid birthday.</FormHelperText>
            )}
          </FormControl>
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
        </VStack>
      </form>
    </VStack>
  )

}