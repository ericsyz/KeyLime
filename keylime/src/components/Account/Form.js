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
                    <Heading fontSize = {20}>Additional Information</Heading>
                </Box>
              </Box>
              <FormControl isRequired>
                <FormLabel fontSize={14}>Address Line 1</FormLabel>
                <Input type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontSize={14}>Address Line 2</FormLabel>
                <Input type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontSize={14}>Address Line 3</FormLabel>
                <Input type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4} require>
                <FormLabel fontSize={14}>City</FormLabel>
                <Input type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>State</FormLabel>
                <Select placeholder='Select'>
                  <option value="AL">Alabama</option>
	                <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Select>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Zip Code</FormLabel>
                <Input type="number" pattern="[0-9]{5}" size = "sm"/>
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
  