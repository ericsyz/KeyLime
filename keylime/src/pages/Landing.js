import { ChakraProvider, Grid, GridItem, Box } from "@chakra-ui/react";
import { React, useState } from "react";
import { NavigationBar, Footer, Profile } from "../components/exportPages"

export function Landing() {
    const [status, setStatus] = useState(0);
    return (
        <ChakraProvider >
            <Box>
                <NavigationBar />
                <Grid h = '500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={4}>
                    <GridItem rowSpan={1} colSpan={1} bg='#E2E8F0'>
                        <Profile />
                    </GridItem>
                    <GridItem colSpan={2} bg='#E2E8F0'/>
                    <GridItem colSpan={2} bg='#E2E8F0'/>
                </Grid>
                <Footer />
            </Box>
        </ChakraProvider>
    )
}