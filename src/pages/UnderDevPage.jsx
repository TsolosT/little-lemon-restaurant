import { Box, Text, Image, VStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import underDevImg from '../assets/chef_underdev.svg';

const UnderDevPage = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100vh"
            backgroundColor="highlight.100"
            px={4}
        >
            <VStack spacing={6}>
                <Image
                    src={underDevImg}
                    alt="Under Development"
                    boxSize="300px"
                    objectFit="contain"
                />
                <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                    This Page is Under Development
                </Text>
                <Text fontSize="lg" color="gray.500">
                    We are working hard to bring this feature to you soon. Please check back later!
                </Text>
                <Button as={Link} to="/" bg="primary.200" color='primary.100' size="lg" _hover={{ bg:'secondary.100' }}>
                    Go Back to Home
                </Button>
            </VStack>
        </Box>
    );
};

export default UnderDevPage;
