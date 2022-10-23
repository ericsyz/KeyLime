import { ChakraProvider, Grid, GridItem, Box } from "@chakra-ui/react";
import { React } from "react";
import { NavigationBar, Footer, Profile } from "../components/exportPages"
import { AuthContext } from '../components/Authentication/AuthProvider';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { useState, useContext, useEffect, Modal } from 'react';

export function Landing() {
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState("");

    useEffect(() => {
        if (currentUser) {
          const starCountRef = ref(db, "users/" + currentUser.uid);
          onValue(starCountRef, (snapshot) => {
            if (snapshot.exists()) {
              var data = snapshot.val();
              setName(data.name);
            }
          });
        }
      }, [currentUser]);

    return (
        <ChakraProvider >
            {currentUser && (
                    <Box>
                        <NavigationBar />
                        <Grid h = '500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={4} >
                            <GridItem rowSpan={1} colSpan={1} bg='#E2E8F0'>
                                <Profile />
                            </GridItem>
                            <GridItem colSpan={2} bg='#E2E8F0'/>
                            <GridItem colSpan={2} bg='#E2E8F0'/>
                        </Grid>
                        <Footer />
                    </Box>
            )}
            {!currentUser && (
                <Box>
                    <NavigationBar />
                    <Grid h = '500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={4} >
                        <GridItem rowSpan={1} colSpan={1} bg='#E2E8F0' >
                            <Profile />
                        </GridItem>
                        <GridItem colSpan={2} bg='#E2E8F0'/>
                        <GridItem colSpan={2} bg='#E2E8F0'/>
                    </Grid>
                    <Footer />
                </Box>
            )}
        </ChakraProvider>
    )
}