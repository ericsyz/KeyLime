import { LeaseCard } from './LeaseCard';
import { Box, VStack, Text, Avatar, AvatarBadge, Center, ListItem, Button, ListIcon, List } from 'react';
import { MdCheckCircle, MdSettings } from 'react-icons/md';

export function LeaseList(props) {
    return (
        <VStack>
        <Box marginTop = {5}>
            <Avatar size = 'xl'>
                <AvatarBadge boxSize='0.8em' bg='green.500' />
            </Avatar>
        </Box>
        <List spacing={5}>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                <Button>lol</Button>
            </ListItem>
            <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                <Button>{props.address}</Button>
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
                <ListIcon as={MdSettings} color='green.500' />
                <Button>adad</Button>
            </ListItem>
        </List>
    </VStack>
    );
}