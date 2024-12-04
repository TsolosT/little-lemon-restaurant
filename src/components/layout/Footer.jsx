import { Box, Flex, Stack, Text, Link, Icon, Divider, Image } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTripadvisor } from "react-icons/fa";
import logoFooter from "../../assets/logo-footer.png";

const Footer = () => {
    return (
        <Box bg="primary.100" color="highlight.100" py={10}>
            <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                align="start"
                maxW="1200px"
                mx="auto"
                px={4}
            >
                {/* Column 1: Logo */}
                <Stack spacing={4} textAlign={{ base: "center", md: "center" }}  mx="auto">
                    <Box boxSize='sm'>
                        <Image src={logoFooter} alt='Little Lemon Logo'  mx="auto" />
                    </Box>
                </Stack>

                {/* Column 2: Navigation */}
                <Stack spacing={2} textAlign={{ base: "center", md: "left" }}  mx="auto">
                    <Text fontSize="lg" fontWeight="bold" fontFamily="Markazi Text" >
                        Navigation
                    </Text>
                    <Link href="/" _hover={{ color: "secondary.100"  }}>
                        Home
                    </Link>
                    <Link href="/about" _hover={{ color: "secondary.100"  }}>
                        About Us
                    </Link>
                    <Link href="/menu" _hover={{ color: "secondary.100"  }}>
                        Menu
                    </Link>
                    <Link href="/reservetion" _hover={{ color: "secondary.100"  }}>
                        Reservetion
                    </Link>
                    <Link href="/order-online" _hover={{ color: "secondary.100"  }}>
                        Order Online
                    </Link>
                    <Link href="/login" _hover={{ color: "secondary.100" }}>
                        Login
                    </Link>
                </Stack>

                {/* Column 3: Contact Info */}
                <Stack spacing={2} textAlign={{ base: "center", md: "left" }}  mx="auto">
                    <Text fontSize="lg" fontWeight="bold" fontFamily="Markazi Text" >
                        Contact Us
                    </Text>
                    <Text fontSize="sm">123 Green Street, New York, NY</Text>
                    <Text fontSize="sm">Phone: (123) 456-7890</Text>
                    <Text fontSize="sm">Email: info@example.com</Text>
                </Stack>

                {/* Column 4: Social Media */}
                <Stack spacing={4} textAlign={{ base: "center", md: "left" }}  mx="auto">
                    <Text fontSize="lg" fontWeight="bold" fontFamily="Markazi Text" >
                        Follow Us
                    </Text>
                    <Flex justify={{ base: "center", md: "flex-start" }} gap={4}>
                        <Link href="#" isExternal>
                            <Icon as={FaInstagram} boxSize={6} _hover={{ color: "secondary.100"  }}/>
                        </Link>
                        <Link href="#" isExternal>
                            <Icon as={FaFacebook} boxSize={6} _hover={{ color: "secondary.100"  }}/>
                        </Link>
                        <Link href="#" isExternal>
                            <Icon as={FaTripadvisor} boxSize={6} _hover={{ color: "secondary.100"  }}/>
                        </Link>
                    </Flex>
                </Stack>
            </Flex>
            {/* Divider and Extra Footer Info */}
            <Divider my={4} borderColor="whiteAlpha.400" />
            <Text fontSize="xs" textAlign="center" mt={2}>
                © 2024 Little Lemon. All rights reserved.
            </Text>
        </Box>
    );
};

export default Footer;
