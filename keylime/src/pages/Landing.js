import { ChakraProvider, Grid, GridItem, Box } from "@chakra-ui/react";
import { React, useState } from "react";
import { NavigationBar } from "../components/NavigationBar"

export function Landing() {
    return (
        <ChakraProvider >
            <Box>
                <NavigationBar />
                <Grid h = '1000px' templateRows='repeat(2, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem rowSpan={1} colSpan={1} bg='#E2E8F0' borderRadius ='lg'/>
                    <GridItem colSpan={2} bg='#C6F6D5' borderRadius ='lg'/>
                    <GridItem colSpan={2} bg='#C6F6D5' borderRadius ='lg'/>
                    <GridItem colSpan={5} bg='#E2E8F0'/>
                </Grid>
            </Box>
        </ChakraProvider>
    )
}