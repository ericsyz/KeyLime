import { React } from "react";
import { Avatar, AvatarBadge, VStack, Center, Box, Text, List, ListItem, ListIcon, Button} from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from 'react-icons/md'
import { AuthContext } from './Authentication/AuthProvider';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { useState, useContext, useEffect } from 'react';

export function Profile() {
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
            <VStack>
                <Box marginTop = {5}>
                    <Avatar size = 'xl'>
                        <AvatarBadge boxSize='0.8em' bg='green.500' />
                    </Avatar>
                </Box>
                <Center>
                    <Text fontSize = {20} marginBottom = {15}>
                        {currentUser && (<Text>{name}</Text>)}
                        {!currentUser && (<Text></Text>)}
                    </Text>
                </Center>
                <List spacing={5}>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        <Button>Personal Info</Button>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        <Button>Messages</Button>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color='green.500' />
                        <Button>Privacy and Security</Button>
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        <ListIcon as={MdSettings} color='green.500' />
                        <Button>Global Preferences</Button>
                    </ListItem>
                </List>
            </VStack>
    )
}