import { Box, Center, Image, Flex, Badge, Text, Button, Wrap } from "@chakra-ui/react";

export function Leasing() {
  return (
    <Center h="137vh">
      <Box colorScheme='red' p="5" maxW="5000px" borderWidth="5px">
      <Text as='b' fontSize='25px' >Villages of East Atlanta</Text>
      <Center>
        <Image mt={2} mb={2} borderRadius="md" src="https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?b=1&k=20&m=1211174464&s=612x612&w=0&h=rAGfSLUvnrvPauUveA-upyUtxffW7LvCKvhqYLF8eH8=" />
      </Center>
        <Flex align="baseline" mt={2}>
          <Badge variant='outline' color="green">
            Recently Reduced Price
          </Badge>
        </Flex>
        <Text fontSize='25px'>Modern Suburban House, 1 Bathroom</Text>
        <Text fontSize='15px'>1800 Memorial Dr SE, Atlanta, GA 30317</Text>
        <Box p="5" maxW="700px" borderWidth="5px">
          <Text fontSize='15px' as='b'>Description</Text>
          <Text fontSize='15px'>
             Stunningly renovated 4 bedroom 2.5 bathroom home in Atlanta. The kitchen is equipped with tile backsplash, granite countertops, 
             new stainless steel appliances and updated cabinets. Convenient to downtown Decatur, DeKalb Farmers Market, 
             East Lake golf course/park and downtown Atlanta. Call to schedule a viewing today, this wont last long!
          </Text>
        </Box>
        <Center>
          <Button mt={2} colorScheme='blue' variant='solid'>Click Here to Submit Application</Button>
        </Center>
 
      </Box>
    </Center>
  );
}