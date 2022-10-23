import { Box } from '@chakra-ui/react';

export function LeaseCard(props) {
    return (
        <Box maxW='100%' borderColor='gray' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='6'>
                <Box marginLeft='0px' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='0'
                    >
                        {props.address}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {props.city}
                </Box>

                <Box>
                    {props.price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / month
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                </Box>
            </Box>
        </Box>
    )
}