import { Box, Image, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { FaBicycle } from 'react-icons/fa';

const MenuItemCard = ({ menuItem, hideCTA }) => {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="8px"
            overflow="hidden"
            boxShadow="lg"
            bg="white"
        >
            {/* Image */}
            <Image
                src={menuItem.image}
                alt={menuItem.title}
                objectFit="cover"
                borderTopRadius="8px"
                w="100%"
                h="200px"
            />
            {/* Body */}
            <Box p={4} minHeight='140px'>
                {/* Title and Price */}
                <Flex justifyContent="space-between" alignItems="center" mb={2}>
                    <Heading as="h3" size="sm" color="primary.100">
                        {menuItem.title}
                    </Heading>
                    <Text fontWeight="bold" color="secondary.100">
                        ${menuItem.price}
                    </Text>
                </Flex>
                {/* Description */}
                <Text fontSize='xs' color="highlight.200" mb={4}>
                    {menuItem.details}
                </Text>
            </Box>
            {/* Footer: Order Button */}
            {!hideCTA && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    pb={2}
                >
                    <Button
                        color="primary.100"
                        variant="ghost"
                        rightIcon={<Icon as={FaBicycle} />}
                        _hover={{ bg: 'secondary.200' }}
                    >
                        Order a delivery
                    </ Button>
                </Box>
            )}
        </Box>
    );
};

export default MenuItemCard;
