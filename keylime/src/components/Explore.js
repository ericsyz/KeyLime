import { Grid, VStack, Text, WrapItem, Image, Button, Stack, Box, ButtonGroup, Wrap, Center, ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import { NavigationBar } from './exportPages';


export function Explore() {
    const [houses, setHouses] = useState([
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'},
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'},
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'},
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'},
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'},
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'},
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'},
        {houseName: 'Chic beachhouse', price: '$1200', urlImage: 'https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg'}
    ])
    return (
        <ChakraProvider>
            <NavigationBar />
                <div className='house-list'>
                    {houses.map((house, index) => (
                        <Button variant='ghost' mb={75} mt={75} ml={20} >
                            <input type="image" src="https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" name="submit" width="210" height="150" alt="submit"/>
                        </Button>
                ))}
            </div>
        </ChakraProvider>
            
        )
}