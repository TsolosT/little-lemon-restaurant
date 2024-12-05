import { FaStar } from "react-icons/fa";
import { Box, Flex, Text, Image, Icon  } from '@chakra-ui/react';


function ReviewCard({review}) {
    return (
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
    );
}

export default ReviewCard;