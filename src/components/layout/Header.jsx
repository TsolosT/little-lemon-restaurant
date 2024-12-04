import { Box, Flex, IconButton, Stack, useDisclosure, Image, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="highlight.100" px={{ base:'2', md:'12' }} >
      <Flex h={16} alignItems="center" justifyContent="space-between" gap={{ base:'5', md:'0' }}>
        {/* Mobile Menu (Hamburger Icon) */}
        <IconButton
          size="md"
          icon={isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          aria-label="Toggle navigation"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* Left: Logo */}
        <Box fontWeight="bold" fontSize="lg">
          <Image src={Logo} alt="Little Lemon logo" boxSize="140px" />
        </Box>

        {/* Middle: Navigation Links */}
        <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Stack direction="row" spacing={4}>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/'
                  fontFamily='heading'
              >
                Home
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/about'
                  fontFamily='heading'
              >
                About
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/menu'
                  fontFamily='heading'
              >
                Menu
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/reservetion'
                  fontFamily='heading'
              >
                Reservetion
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/order-online'
                  fontFamily='heading'
              >
                Order Online
            </Link>
            <Link
                  px={2} py={1} rounded="md"
                  _hover={{
                      textDecoration: 'none',
                      bg: 'secondary.100',
                  }}
                  href='/login'
                  fontFamily='heading'
              >
                Login
            </Link>
          </Stack>
        </Flex>

        {/* Right: Cart Icon */}
        <Box
          _hover={{
            cursor: 'pointer',
            color: 'secondary.100',
            transform: 'scale(1.05)',
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
        </Box>
      </Flex>

    {/* Mobile Menu Links */}
    {isOpen && (
      <Box pb={4} display={{ md: 'none' }}>
        <Stack as="nav" spacing={4}>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/'
                fontFamily='heading'
            >
              Home
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/about'
                fontFamily='heading'
            >
              About
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/menu'
                fontFamily='heading'
            >
              Menu
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/reservetion'
                fontFamily='heading'
            >
              Reservetion
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/order-online'
                fontFamily='heading'
            >
              Order Online
          </Link>
          <Link
                px={2} py={1} rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: 'secondary.100',
                }}
                href='/login'
                fontFamily='heading'
            >
              Login
          </Link>
        </Stack>
      </Box>
    )}
    </Box>
  );
};

export default Header;
