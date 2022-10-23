import { React, useState } from "react";
import { Avatar, AvatarBadge, VStack, Center, Box, Text, List, ListItem, ListIcon, Button, ChakraProvider} from '@chakra-ui/react';
import { NavigationBar } from './exportPages'
import { useLocation } from 'react-router-dom';

export function SettingBox() {
    const {state} = useLocation();
    const { title } = state;

    return (
        <ChakraProvider>
            <NavigationBar />
            <Box bg = '#C6F6D5' position = 'fixed' top = '50%' left = '50%' 
                transform = 'translate(-50%, -50%)' height = '60%' width = '30%' borderRadius = 'md'>
                <VStack>
                    <Text>{title}</Text>
                </VStack>
            </Box>
        </ChakraProvider>
    )
}