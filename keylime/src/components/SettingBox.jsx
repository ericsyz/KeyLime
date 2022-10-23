import { React, useState } from "react";
import { Heading, VStack, Divider, Box, Text, FormControl, FormLabel, FormHelperText, Input, Button, ChakraProvider} from '@chakra-ui/react';
import { NavigationBar } from './exportPages'
import { useLocation } from 'react-router-dom';

export function SettingBox() {
    const {state} = useLocation();
    const { title, name, email, birthday, password} = state;

    const emailError = email === '';
    const nameError = name === '';
    const birthdayError = birthday === '';
    const passwordError = password === '';
    return (
        <ChakraProvider>
            <NavigationBar/>
            <VStack maxWidth = '100%'>
                <Box bg = '#C6F6D5'
                    height = '50%' width = '30%' borderRadius = 'md'>
                    <VStack padding = '20px' alignItems = 'left'>
                        <Heading>{title}</Heading>
                        <Divider borderWidth = '2px' borderColor = 'black'></Divider>
                        <VStack spacing={3}>
                        <FormControl isInvalid={emailError}>
                            <FormLabel>Name</FormLabel>
                            <Input type='name' width='200' style={{border: '1px solid black'}} value={name}/>
                            {!nameError ? (<FormHelperText>{name}</FormHelperText>) : (
                            <FormHelperText color='red'>Invalid name.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl>
                            <FormLabel>Birthday</FormLabel>
                            <Input type='date' size='sm' value={birthday} style={{border: '1px solid black'}}/>
                            {!birthdayError ? (<FormHelperText>{birthday}</FormHelperText>) : (
                            <FormHelperText color='red'>Invalid birthday.</FormHelperText>
                            )}
                        </FormControl>
                        <FormControl isInvalid={emailError}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' width='200' style={{border: '1px solid black'}} value={email}/>
                            {!emailError ? (<FormHelperText>{email}</FormHelperText>) : (
                            <FormHelperText color='red'>Invalid email.</FormHelperText>
                            )}
                        </FormControl>
                        {/* <FormControl as='fieldset'>
                            <FormLabel>Password</FormLabel>
                            <Input type='text' width='200' value={password} />
                            {!passwordError ? (<FormHelperText>{password}</FormHelperText>) : (
                            <FormHelperText color='red'>Invalid password.</FormHelperText>
                            )}
                        </FormControl> */}
                        <Button type='submit' colorScheme='blue'>Submit</Button>
                        </VStack>
                    </VStack>
                </Box>
            </VStack>
            
        </ChakraProvider>
    )
}