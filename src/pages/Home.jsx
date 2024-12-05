import { Box, Button, Flex, Heading, Text, Image, Icon,VStack  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import FullScreenSection from '../components/layout/FullScreenSection';
import restaurantFoodImg from '../assets/restauranfood.jpg';
import aboutImage from '../assets/about.webp';
import { FaStar } from "react-icons/fa";

const reviews = [
    {
      id: 1,
      rating: 4,
      image: "https://images.unsplash.com/photo-1692777525709-122dee20e577?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "John Doe",
      comment: "Great experience! The food was amazing.",
    },
    {
      id: 2,
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1723122130964-c2efc59b93bf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Jane Smith",
      comment: "Absolutely loved it! Will come back again.",
    },
    {
      id: 3,
      rating: 3,
      image: "https://plus.unsplash.com/premium_photo-1679503585289-c02467981894?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Chris Brown",
      comment: "Good food but the service was a bit slow.",
    },
];


function Home() {
    return (
        <>
            {/* Hero */}
            <Box
                bg="primary.100"
                py={16}
                px={4}
                width='100%'
                height={{ base: 'auto', md: '500px' }}
            >
                <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-evenly"
                align="start"
                gap={8}
                >
                    {/* Left Column: Text Content */}
                    <Box maxW={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }} color='highlight.100'>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" mb={2}>
                            Little Lemon
                        </Heading>
                        <Heading as="h2" fontSize={{ base: 'l', md: 'xl' }} fontWeight="bold" mb={4}>
                            Chicago
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'l' }} mb={6}>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </Text>
                        <Button  as={Link} to="/reservetion" bg="primary.200" color='primary.100' size="lg" _hover={{ bg:'secondary.100' }}>
                            Reverse a table
                        </Button>
                    </Box>

                    {/* Right Column: Image */}
                    <Box
                        maxW={{ base: '90%', md: '30%' }}
                        position="relative"
                        boxShadow="md"
                        borderRadius="8px"
                        overflow="hidden"
                        mx={{ base: 'auto', md: '0' }}
                    >
                        <Image
                        src={restaurantFoodImg}
                        alt="Dining Experience"
                        objectFit="cover"
                        borderRadius="8px"
                        boxShadow="md"
                        position="relative"
                        zIndex={1}
                        transform="translateY(-10px)"
                        />
                    </Box>
                </Flex>
            </Box>
 
            {/* Testimonials */}
            <FullScreenSection
                backgroundColor="primary.100"
                title="Testimonials"
                isDarkBackground={true}
                titlePosition="center"
                titleColor='highlight.100'
            >
                {reviews.map((review) => (
                    <Box
                        key={review.id}
                        bg="highlight.100"
                        p={4}
                        borderRadius="8px"
                        boxShadow="md"
                        transition="transform 0.3s ease, box-shadow 0.3s ease"
                        _hover={{
                            transform: "scale(1.05)",
                            boxShadow: "lg",
                        }}
                        mx='auto'
                    >
                        {/* Rating */}
                        <Flex mb={4}>
                            {Array.from({ length: 5 }, (_, index) => (
                                <Icon
                                    as={FaStar}
                                    key={index}
                                    color={index < review.rating ? "yellow.400" : "gray.300"}
                                    boxSize={4}
                                />
                            ))}
                        </Flex>

                        {/* Body */}
                        <Flex align="center" mb={4}>
                            <Image
                            src={review.image}
                            alt={review.username}
                            boxSize="80px"
                            borderRadius="8px"
                            mr={4}
                            />
                            <Text fontWeight="bold" color="highlight.200">{review.username}</Text>
                        </Flex>

                        {/* Footer */}
                        <Text fontSize="sm" color="highlight.200">
                            {review.comment}
                        </Text>
                    </Box>
                ))}
            </FullScreenSection>
             {/* About */}
            <FullScreenSection
                backgroundColor="highlight.100"
                isDarkBackground={false}
            >
                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify="space-evenly"
                    align="start"
                    gap={8}
                >
                    {/* Left Column: Text Content */}
                    <Box maxW={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }} color='highlight.200'>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" mb={2} color='primary.100'>
                            About Us
                        </Heading>
                        <Heading as="h2" fontSize={{ base: 'l', md: 'xl' }}  mb={4}>
                            Little Lemon - Chicago
                        </Heading>
                        <Text fontSize={{ base: 'md', md: 'l' }} mb={6}>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                        </Text>
                    </Box>

                    {/* Right Column: Image */}
                    <Box
                        maxW={{ base: '90%', md: '30%' }}
                        position="relative"
                        borderRadius="8px"
                        overflow="hidden"
                        mx={{ base: 'auto', md: '0' }}
                    >
                        <Image
                        src={aboutImage}
                        alt="Dining Experience"
                        objectFit="cover"
                        borderRadius="8px"
                        position="relative"
                        />
                    </Box>
                </Flex>
            </FullScreenSection>
        </>
    );
}

export default Home;