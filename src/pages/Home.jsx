import { Box, Button, Flex, Heading, Text, Image  } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import FullScreenSection from '../components/layout/FullScreenSection';
import ReviewCard from '../components/ReviewCard';
import MenuItemCard from '../components/MenuItemCard';
import restaurantFoodImg from '../assets/restauranfood.jpg';
import aboutImage from '../assets/about.webp';
import reviews from '../data/reviews';
import menu from '../data/menu';


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
                mb={8}
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
                        maxW={{ base: '300px', md: '360px' }}
                        position="relative"
                        borderRadius="8px"
                        overflow="hidden"
                        mx={{ base: 'auto', md: '0' }}
                    >
                        <Image
                        src={restaurantFoodImg}
                        alt="Dining Experience"
                        objectFit="cover"
                        borderRadius="8px"
                        position="relative"
                        zIndex={1}
                        transform="translateY(-10px)"
                        />
                    </Box>
                </Flex>
            </Box>
            {/* Specials */}
            <FullScreenSection
                backgroundColor="highlight.100"
                isDarkBackground={false}
                my={12}
                direction="column"
            >
                <Flex minWidth='100%' alignItems='center' justifyContent='space-between'  direction={{ base: "column", md: "row" }} gap='2'>
                    <Box p='2'>
                        <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} fontWeight="bold" mb={2}>
                            This Week Specials!
                        </Heading>
                    </Box>
                    <Box gap='2'>
                        <Button  as={Link} to="/menu" bg="primary.200" color='primary.100' size="lg" _hover={{ bg:'secondary.100' }}>
                                Order Online
                        </Button>
                    </Box>
                </Flex>
                <Flex minWidth='100%' alignItems='center' justifyContent='space-evenly'  direction={{ base: "column", md: "row" }} gap='2'>
                    {menu.map((item) => (
                        <MenuItemCard key={item.id} menuItem={item} hideCTA={false}/>
                    ))}
                </Flex>
            </FullScreenSection>
            {/* Testimonials */}
            <FullScreenSection
                backgroundColor="primary.100"
                title="Testimonials"
                isDarkBackground={true}
                titlePosition="center"
                titleColor='highlight.100'
                direction={{ base: "column", md: "row" }}
            >
                {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review}/>
                ))}
            </FullScreenSection>
             {/* About */}
            <FullScreenSection
                backgroundColor="highlight.100"
                isDarkBackground={false}
                direction={{ base: "column", md: "row" }}
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