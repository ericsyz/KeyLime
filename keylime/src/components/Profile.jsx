import { React } from "react";
import { Avatar, AvatarBadge, VStack, Center, Box, Text, List, ListItem, ListIcon, Button} from '@chakra-ui/react';
import { MdCheckCircle, MdSettings } from 'react-icons/md'

export function Profile() {
    return (
        <VStack>
            <Box marginTop = {5}>
                <Avatar size = 'xl'>
                    <AvatarBadge boxSize='0.8em' bg='green.500' />
                </Avatar>
            </Box>
            <Center>
                <Text fontSize = {20} marginBottom = {15}>Angelica Wang</Text>
            </Center>
            <List spacing={5}>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    <Button>Personal Info</Button>
                </ListItem>
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    <Button>Notifications</Button>
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