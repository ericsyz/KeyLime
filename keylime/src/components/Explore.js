import { Grid, GridItem, ChakraProvider } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../components/Authentication/AuthProvider';
import { NavigationBar, LeaseCard } from './exportPages';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';


export function Explore() {
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
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
        })},
    )
    console.log(loadLease);
    setIsLoading(false);
    setLeases(loadLease);
    }, []);

    if (isLoading) {
        return (
            <section>
            <p>Loading...</p>
            </section>
        );
    }
    const cards = [];
    {loadedLeases.map((data) => {
        cards.push(<LeaseCard address={data.address} city={data.city} price={data.price}/>)
    })}
    return (
        <ChakraProvider>
            <NavigationBar />
            <Grid h = '500px' templateColumns='repeat(5, 1fr)' templateRows='repeat(2, 1fr)' gap={6}>
                
                    {loadedLeases.map((data) => {
                        return (
                            <GridItem>
                                <LeaseCard address={data.address} city={data.city} price={data.price}/>
                            </GridItem>
                        )
                    })}
            </Grid>
        </ChakraProvider>
    )
}