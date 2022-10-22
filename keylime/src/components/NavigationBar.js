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
  } from '@chakra-ui/react'
  import * as React from 'react'
  import logo from '../logo.svg';
  import { Image } from '@chakra-ui/react' 
  
export function NavigationBar() {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
      <Box
        as="section"
        /*pb={{
          base: '12',
          md: '24',
        }}*/
      >
        <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
          <Container
            py={{
              base: '4',
              lg: '1',
            }}
          >
            <HStack spacing="10" justify="space-between">
              <Image src={logo} boxSize='100'/>
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Explore', 'Opt2', 'Opt3', 'Action Center'].map((item) => (
                      <Button key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="5">
                    <div></div>
                    <Button variant="ghost">Sign in</Button>
                    <Button colorScheme='blue'>Sign up</Button>
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
