import { useState } from "react";
import {
    Box,
    VStack,
    HStack,
    Input,
    Select,
    RadioGroup,
    Radio,
    Textarea,
    Button,
    FormLabel,
} from "@chakra-ui/react";

const StepReservationInfo = ({ formData, onBack, onReserve }) => {
    const [reservationInfo, setReservationInfo] = useState({
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        occasion: formData.occasion,
        seating: formData.seating,
        specialRequest: formData.specialRequest,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReservationInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleReserve = () => {
        onReserve(reservationInfo);
    };

    return (
        <Box p={4}>
            <VStack spacing={4}>
                <HStack w={{base:'100%', md:'50%'}}>
                    <Box  w={{base:'100%', md:'50%'}}>
                        <FormLabel>Date</FormLabel>
                        <Input
                            name="date"
                            type="date"
                            value={reservationInfo.date}
                            onChange={handleChange}
                            focusBorderColor="secondary.100"
                        />
                    </Box>
                    <Box  w={{base:'100%', md:'50%'}}>
                        <FormLabel>Time</FormLabel>
                        <Input
                            name="time"
                            type="time"
                            value={reservationInfo.time}
                            onChange={handleChange}
                            focusBorderColor="secondary.100"
                        />
                    </Box>
                </HStack>
                <Box  w={{base:'100%', md:'50%'}}>
                    <FormLabel>Number of Guests</FormLabel>
                    <Input
                        name="guests"
                        type="number"
                        min="1"
                        value={reservationInfo.guests}
                        onChange={handleChange}
                        focusBorderColor="secondary.100"
                    />
                </Box>
                <Box  w={{base:'100%', md:'50%'}}>
                    <FormLabel>Occasion</FormLabel>
                    <Select
                        name="occasion"
                        value={reservationInfo.occasion}
                        onChange={handleChange}
                        focusBorderColor="secondary.100"
                        color="highlight.100"
                        sx={{
                            option: {
                                bg: "gray.200",
                                color: "primary.100",
                            },
                        }}
                    >
                        <option value="Casual">Casual</option>
                        <option value="Business">Business</option>
                        <option value="Celebration">Anniversery</option>
                        <option value="Celebration">Birthday</option>
                    </Select>
                </Box>
                <Box  w={{base:'100%', md:'50%'}}>
                    <FormLabel>Seating Option</FormLabel>
                    <RadioGroup
                        name="seating"
                        value={reservationInfo.seating}
                        onChange={(value) =>
                            setReservationInfo((prev) => ({ ...prev, seating: value }))
                        }
                    >
                        <HStack>
                            <Radio value="Indoor">Indoor</Radio>
                            <Radio value="Outdoor">Outdoor</Radio>
                        </HStack>
                    </RadioGroup>
                </Box>
                <Box  w={{base:'100%', md:'50%'}}>
                    <FormLabel>Special Requests</FormLabel>
                    <Textarea
                        name="specialRequest"
                        value={reservationInfo.specialRequest}
                        onChange={handleChange}
                        placeholder="Any special requests?"
                        focusBorderColor="secondary.100"
                    />
                </Box>
                <HStack spacing={4}>
                    <Button onClick={onBack} size="lg" variant='ghost' color='secondary.100'>Back</Button>
                    <Button  bg="primary.200" color='primary.100' size="lg" _hover={{ bg:'secondary.100' }} onClick={handleReserve}>
                        Reserve Table
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default StepReservationInfo;
