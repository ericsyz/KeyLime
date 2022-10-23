import { ChakraProvider, Grid, GridItem, Box } from "@chakra-ui/react";
import { React } from "react";
import { NavigationBar, Footer, Profile, LeaseList } from "../components/exportPages"
import { AuthContext } from '../components/Authentication/AuthProvider';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { useState, useContext, useEffect, Modal } from 'react';

export function Landing() {
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [loadedLeases, setLeases] = useState([]);

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


      var loadLease = [];
      useEffect(() => {
        loadLease = [];
        const star = ref(db, "leases/");
          onValue(star, (snapshot) => {
            snapshot.forEach(c => {
              loadLease.push(c.val());
              setLeases(loadLease);
            })},
        )
        console.log(loadLease);
        this.forceUpdate();
        }, []);
    // useEffect(() => {
    //     fetch(db).then((response) => {
    //         return response.json;
    //     }).then((data) => {
    //         const leas = [];

    //         for (const key in data) {
    //             const lol = {
    //                 id: key,
    //                 address: data[key].address,
    //                 price: data[key].price,
    //                 city: data[key].city
    //             };

    //             leas.push(lol);
    //         }
    //         setLeases(leas);
    //     });

    // }, []);


    return (
        <ChakraProvider >
            {currentUser && (
                <Box>
                    <NavigationBar />
                    <Grid h='500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={4} >
                        <GridItem rowSpan={1} colSpan={1} bg='#E2E8F0'>
                            <Profile />
                        </GridItem>
                        <GridItem colSpan={2} bg='#E2E8F0' />
                        <GridItem colSpan={2} bg='#E2E8F0' />
                    </Grid>
                    <Footer />
                    {loadLease.map((data) => {
                        <h1>data.address</h1>
                    })}
                </Box>
            )}
            {!currentUser && (
                <Box>
                    <NavigationBar />
                    <Grid h='500px' templateRows='repeat(1, 1fr)' templateColumns='repeat(5, 1fr)' gap={4} >
                        <GridItem rowSpan={1} colSpan={1} bg='#E2E8F0' >
                            <Profile />
                        </GridItem>
                        <GridItem colSpan={2} bg='#E2E8F0' />
                        <GridItem colSpan={2} bg='#E2E8F0' />
                    </Grid>
                    <Footer />
                </Box>
            )}
        </ChakraProvider>
    )
}