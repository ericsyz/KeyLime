import React from 'react';
import { Divider } from '@chakra-ui/react';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import { storeNewLease } from '../../firebase';
import { useNavigate } from "react-router-dom";
import { NavigationBar } from '../NavigationBar';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button
} from '@chakra-ui/react';

export function CreateLease() {
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [price, setPrice] = useState('');

  const [profile, setProfile] = useState('');
  const [property, setProperty] = useState('');

  const [description, setDescription] = useState('');


  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleZipcodeChange = (e) => setZipcode(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleProfileChange = (e) => setProfile(e.target.value);
  const handlePropertyChange = (e) => setProperty(e.target.value);

  const handleDescriptionChange = (e) => setDescription(e.target.value);


  let navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    storeNewLease(currentUser, phone, address, city, state, zipcode, price, profile, property, description)
    .then((res) => {
      console.log("Worked!");
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
    })
  }


    return (
      <div>
        <NavigationBar/>
        <Flex width="full" align="center" justifyContent="center">
        <Box p={1}>
          <Box textAlign="center">
            <Heading>Apply</Heading>
          </Box>
          <Divider mt = {2} mb = {2} />
          <Box>
            <Box textAlign="center">
                <Heading fontSize = {20}>Required Information</Heading>
            </Box>
          </Box>
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
            <FormControl mt={4} >
                <FormLabel fontSize={14}>Profile Picture</FormLabel>
                <Input value={profile} onChange={handleProfileChange} type="file" size = "sm" accept="image/png, image/gif, image/jpeg" border = "none"/>
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Phone Number</FormLabel>
                <Input value={phone} onChange={handlePhoneChange} type="tel" placeholder="111-111-1111" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" size = "sm"/>
              </FormControl>
              <Divider mt = {4} mb = {2} />
              <FormControl isRequired>
                <FormLabel fontSize={14}>Address Line 1</FormLabel>
                <Input value={address} onChange={handleAddressChange} type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontSize={14}>Address Line 2</FormLabel>
                <Input type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel fontSize={14}>Address Line 3</FormLabel>
                <Input type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>City</FormLabel>
                <Input value={city} onChange={handleCityChange} type="text" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>State</FormLabel>
                <Select value={state} onChange={handleStateChange} placeholder='Select'>
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
                <Input value={zipcode} onChange={handleZipcodeChange} type="number" pattern="[0-9]{5}" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Price</FormLabel>
                <Input value={price} onChange={handlePriceChange} type="number" pattern="[0-9]{5}" size = "sm"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Property Description</FormLabel>
                <Input value={description} onChange={handleDescriptionChange} type="text"/>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel fontSize={14}>Property Image</FormLabel>
                <Input value={property} onChange={handlePropertyChange} type="file" size = "sm" accept="image/png, image/gif, image/jpeg" border = "none"/>
              </FormControl>

              <Button width="text" mt={4} type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
      </div>
      );
  }