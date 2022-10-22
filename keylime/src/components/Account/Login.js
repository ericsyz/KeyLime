import { NavigationBar } from '../exportPages';
import { useState } from 'react';
import { Flex, VStack, Text, RadioGroup, Radio, Button, HStack, Alert } from '@chakra-ui/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { refFromURL } from 'firebase/database';

export function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false);

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value);

    //const handlePasswordChange = (e) => setPassword(e.target.value)
    //const isPassError = password === ''
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(0);

    const emailError = loginEmail === ''
    const passwordError = loginPassword === ''

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user)
            navigate('/');
        } catch (error) {
            console.log(error);
            setIsError(true);

        }
    }

    return (
        <VStack spacing={3}>
            <Text fontSize='5xl'>Log into your account</Text>
            <VStack>
                <FormControl isInvalid={emailError} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' width='200' value={loginEmail}
                        onChange={(e) => {
                            setLoginEmail(e.target.value)
                        }}
                    />
                    {!emailError ? (<FormHelperText>Enter your email.</FormHelperText>) : (
                        <FormHelperText color='red'>Invalid email.</FormHelperText>
                    )}
                </FormControl>
                <FormControl as='fieldset' isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type='text' width='200' value={loginPassword}
                        onChange={(e) => {
                            setLoginPassword(e.target.value)
                        }}
                    />
                    {!passwordError ? (<FormHelperText>Enter your password.</FormHelperText>) : (
                        <FormHelperText color='red'>Invalid password.</FormHelperText>
                    )}
                </FormControl>
            </VStack>
            <Button type='submit' colorScheme='blue'
                onClick={login}
            >Submit</Button>
            {isError && (
                <Text color='red'>Invalid email and password combination.</Text>
            )}
        </VStack>

    )
}