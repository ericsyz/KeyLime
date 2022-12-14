import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  Link,
  Route
} from '@chakra-ui/react'
import * as React from 'react';
import logo from '../logo.svg';
import { Image } from '@chakra-ui/react';
import { AuthContext } from './Authentication/AuthProvider';
import { ref, onValue } from 'firebase/database';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeaseCard } from './exportPages';

export function NavigationBar() {
  let navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })


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


  function handleSignIn() {
    navigate('/register');
  }

  function handleLogIn() {
    navigate('/login');
  }

  function handleLogOut() {
    signOut(auth);
  }



  return (
    <Box mt={3} mb={3}
      as="section"
    /*pb={{
      base: '12',
      md: '24',
    }}*/
    >
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container marginLeft='0'
          py={{
            base: '4',
            lg: '1',
          }}
          maxWidth='100%'
        >
          <HStack spacing="10" justify="space-between">
            {/* <Link to='/'> 
              <div>
                    <img src={require('../newLogo.png')/>
              </div>
            </Link> */}
            <Button variant='ghost' onClick={() => { navigate('/') }} >
              <Image src={require('../newLogo.png')} mt={3} width="75" height="75" />
            </Button>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Button onClick={() => {
                    navigate('/explore')
                  }}>Explore</Button>
                  <Button onClick={() => {
                    if (currentUser) {
                      navigate('/createlease')
                    } else {
                      alert("Unable to access Action Center unless you are logged in")
                    }
                  }}>Action Center</Button>
                </ButtonGroup>
                <HStack textAlign='right' spacing="5">
                  {currentUser && (<Button marginRight='0' variant="ghost" onClick={handleLogOut}>Logout?</Button>)};
                  {!currentUser && (<Button marginRight='0' onClick={handleSignIn} colorScheme="blue">Sign up</Button>)};
                  {!currentUser && (<Button marginRight='0' onClick={handleLogIn} colorScheme='blue'>Sign in</Button>)};

                </HStack>
              </Flex>
            ) : (
              <IconButton />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
