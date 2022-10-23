import { React, useState } from "react";
import { Heading, VStack, Divider, Box, Text, List, ListItem, ListIcon, Button, ChakraProvider} from '@chakra-ui/react';
import { NavigationBar } from './exportPages'
import { useLocation } from 'react-router-dom';

export function SettingBox() {
    const {state} = useLocation();
    const { title, name, email, birthday } = state;

    return (
        <ChakraProvider>
            <NavigationBar />
            <Box bg = '#C6F6D5' position = 'fixed' top = '50%' left = '50%' 
                transform = 'translate(-50%, -50%)' height = '60%' width = '30%' borderRadius = 'md'>
                <VStack padding = '20px' alignItems = 'left'>
                    <Heading>{title}</Heading>
                    <Divider borderWidth = '2px' borderColor = 'black'></Divider>
                    <Text>{name}</Text>
                    <Text>{email}</Text>
                    <Text>{birthday}</Text>
                </VStack>
            </Box>
        </ChakraProvider>
    )
}