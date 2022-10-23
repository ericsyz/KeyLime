import { React, useState } from "react";
import { Image, Center, VStack, Divider, Box, Text, FormControl, FormLabel, FormHelperText, Input, Button, ChakraProvider} from '@chakra-ui/react';
import { NavigationBar } from './exportPages'
import { useLocation } from 'react-router-dom';

export function Privacy_Security() {
  
    return (
        <ChakraProvider>
            <NavigationBar/>
            <VStack maxWidth = '100%'>
                <Box bg = '#C6F6D5'
                    height = '50%' width = '80%' borderRadius = 'md'>
                    <VStack padding = '20px' alignItems = 'left'>
                    <Text fontSize='25px' as='b' >What is our Private Policy and how do we protect your information?</Text>
                    <Text as='cite' >Effective June 26, 2022 </Text>
                    <Center>
                        <Image borderRadius="md" src="https://assets-global.website-files.com/6082ee0e95eb6459d78fac06/626c898c256552609e3f6360_How-To-Protect-Your-Privacy-Online.png" width="300" height="180"></Image>
                    </Center>
                    <Text >Here at KeyLime, we prioritize our customers always. When you use our services, you're trusting us with 
                        your information. We understand this is a big 
                        responsibility and are constantly working to protect your information.</Text>
                    <Text fontSize='20px' as='b' >A promise we will always make...</Text>
                    <Text >Your infomation will NEVER be sold or shared with third-party affiliates. If you chose to, we can send you newsletters and recommendations based
                        off of your preferences. This can be altered by contacting us.
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