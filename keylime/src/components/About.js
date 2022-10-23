import { React, useState } from "react";
import { Image, Center, VStack, Divider, Box, Text, FormControl, FormLabel, FormHelperText, Input, Button, ChakraProvider} from '@chakra-ui/react';
import { NavigationBar } from './exportPages'
import { useLocation } from 'react-router-dom';

export function About() {
  
    return (
        <ChakraProvider>
            <NavigationBar/>
            <VStack maxWidth = '100%'>
                <Box bg = '#C6F6D5'
                    height = '50%' width = '80%' borderRadius = 'md'>
                    <VStack padding = '20px' alignItems = 'left'>
                    <Text fontSize='25px' as='b' >Who is KeyLime and what do we do?</Text>
                    <Text as='cite' >Edited September 26, 2021 </Text>
                    <Center>
                        <Image borderRadius="md" src="https://static.vecteezy.com/system/resources/thumbnails/002/373/821/small/set-of-business-people-characters-free-vector.jpg" width="300" height="180"></Image>
                    </Center>
                    <Text >KeyLime is reimagining short-term apartment rentals to make it easier to unlock life’s next chapter. 
                    We are a leading rental marketplace dedicated to empowering consumers with data, inspiration and knowledge.
                    </Text>
                    <Text fontSize='20px' as='b' >What are our values?</Text>
                    <Text > Integrity · Boldness · Honesty · Trust · Accountability · Commitment to Customers · Passion
                    </Text>
w
                    <Text fontSize='20px' as='b' >Don't hestitate to contact us with any questions! </Text>
                    <Text>Email us at 
                    customer-service@keylime.com or call us at 1-800-KEYLIME from the hours 
                    of 8am to 5pm Mon-Fri. :)</Text>
                    </VStack>
                </Box>
            </VStack>
            
        </ChakraProvider>
    )
}