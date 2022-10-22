import React from 'react';

import { Divider } from '@chakra-ui/react'
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button
} from '@chakra-ui/core';

export default function Form() {
    return (
        <Flex width="full" align="center" justifyContent="center">
        <Box p={1}>
          <Box textAlign="center">
            <Heading>Apply</Heading>
          </Box>
          <Divider mt = {2} mb = {2} />
          <Box>
            <Box textAlign="center">
                <Heading fontSize = {20}>Personal Information</Heading>
            </Box>
          </Box>
          <Box my={4} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel fontSize={14}>First name</FormLabel>
                <Input type="text" placeholder="John" size = "sm"/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontSize={14}>Middle Name</FormLabel>
                <Input type="text" placeholder="John" size = "sm"/>
              </FormControl >
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Last Name</FormLabel>
                <Input type="text" placeholder="Smith"  size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Email</FormLabel>
                <Input type="email" placeholder="John@gatech.edu" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Phone Number</FormLabel>
                <Input type="tel" placeholder="111-111-1111" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" size = "sm"/>
              </FormControl>
              <Divider mt = {4} mb = {2} />
              <Box p = {1}>
                <Box textAlign="center">
                    <Heading fontSize = {20}>Secure Information</Heading>
                </Box>
              </Box>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Birth Date</FormLabel>
                <Input type="date" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Social Security Number</FormLabel>
                <Input type="password" placeholder="*********" pattern="[0-9]{9}" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Are you a citizen of the United States?</FormLabel>
                <Select placeholder='Select'>
                    <option>Yes</option>
                    <option>No</option>
                </Select>
              </FormControl>
              <Divider mt = {4} mb = {2} />
              <Box p = {1}>
                <Box textAlign="center">
                    <Heading fontSize = {20}>Emergency Contact</Heading>
                </Box>
              </Box>
              <FormControl isRequired>
                <FormLabel fontSize={14}>First name</FormLabel>
                <Input type="text" placeholder="John" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Last Name</FormLabel>
                <Input type="text" placeholder="Smith"  size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Relationship</FormLabel>
                <Input type="text" placeholder="Mother"  size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Email</FormLabel>
                <Input type="email" placeholder="John@gatech.edu" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Phone Number</FormLabel>
                <Input type="tel" placeholder="111-111-1111" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" size = "sm"/>
              </FormControl>

              <Button width="text" mt={4} type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      );
  }
  