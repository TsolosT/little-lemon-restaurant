import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const ReservationSummary = ({ reservationData }) => {
    return (
        <Box p={4} textAlign="center">
            <Heading size="lg" mb={4}>
                Thank You for Your Reservation!
            </Heading>
            <VStack spacing={2}>
                <Text><strong>Name:</strong> {reservationData.name}</Text>
                <Text><strong>Date:</strong> {reservationData.date}</Text>
                <Text><strong>Time:</strong> {reservationData.time}</Text>
                <Text><strong>Guests:</strong> {reservationData.guests}</Text>
                <Text><strong>Occasion:</strong> {reservationData.occasion}</Text>
                <Text><strong>Seating:</strong> {reservationData.seating}</Text>
                {reservationData.specialRequest && (
                    <Text><strong>Special Request:</strong> {reservationData.specialRequest}</Text>
                )}
            </VStack>
        </Box>
    );
};

export default ReservationSummary;
