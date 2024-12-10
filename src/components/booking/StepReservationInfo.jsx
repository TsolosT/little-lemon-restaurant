import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, VStack, HStack, Input, Select, RadioGroup, Radio, Textarea, Button, FormLabel } from "@chakra-ui/react";

// Validation schema for StepReservationInfo
const validationSchema = Yup.object({
    date: Yup.date().min(new Date(), "Reservation date cannot be in the past.").required("Please enter a reservation date."),
    time: Yup.string().required("Please enter a reservation time."),
    guests: Yup.number().min(1, "At least 1 guest is required").max(20, "Maximum 20 guests allowed").required("Please enter the number of guests."),
});

const StepReservationInfo = ({ reservationInfo, setReservationInfo, onBack, onReserve }) => {
    const formik = useFormik({
        initialValues: reservationInfo,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setReservationInfo(values); // Update parent state
            onReserve(); // Proceed with reservation
        },
    });

    return (
        <Box p={4}>
            <VStack spacing={4} as="form" onSubmit={formik.handleSubmit}>
                <HStack flexDirection={{ base: "column", md: "row" }} w="100%" justifyContent='center'>
                    <Box w={{ base: "100%", md: "25%" }}>
                        <FormLabel htmlFor="date">Date*</FormLabel>
                        <Input
                            id='date'
                            name="date"
                            type="date"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            focusBorderColor="secondary.100"
                            sx={{
                                "&::-webkit-calendar-picker-indicator": {
                                    filter: "invert(70%) sepia(0%) saturate(500%) hue-rotate(170deg)",
                                },
                            }}
                            aria-invalid={formik.touched.date && !!formik.errors.date}
                            aria-describedby="date-error"
                        />
                        {formik.touched.date && formik.errors.date && (
                            <Box color="red.500" fontSize="sm" id="date-error">{formik.errors.date}</Box>
                        )}
                    </Box>
                    <Box w={{ base: "100%", md: "25%" }}>
                        <FormLabel htmlFor="time">Time*</FormLabel>
                        <Input
                            id='time'
                            name="time"
                            type="time"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            focusBorderColor="secondary.100"
                            sx={{
                                "&::-webkit-calendar-picker-indicator": {
                                    filter: "invert(70%) sepia(0%) saturate(500%) hue-rotate(170deg)",
                                },
                            }}
                            aria-invalid={formik.touched.time && !!formik.errors.time}
                            aria-describedby="time-error"
                        />
                        {formik.touched.time && formik.errors.time && (
                            <Box id="time-error" color="red.500" fontSize="sm">{formik.errors.time}</Box>
                        )}
                    </Box>
                </HStack>
                <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel htmlFor="guests">Number of Guests*</FormLabel>
                    <Input
                        id='guests'
                        name="guests"
                        type="number"
                        min="1"
                        value={formik.values.guests}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        focusBorderColor="secondary.100"
                        aria-invalid={formik.touched.guests && !!formik.errors.guests}
                        aria-describedby="guests-error"
                    />
                    {formik.touched.guests && formik.errors.guests && (
                        <Box id='guests-error' color="red.500" fontSize="sm">{formik.errors.guests}</Box>
                    )}
                </Box>
                <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel htmlFor="occasion">Occasion</FormLabel>
                    <Select
                        id='occasion'
                        name="occasion"
                        value={formik.values.occasion}
                        onChange={formik.handleChange}
                        focusBorderColor="secondary.100"
                        sx={{
                            option: {
                                bg: "gray.200",
                                color: "primary.100",
                            },
                        }}
                    >
                        <option value="Casual">Casual</option>
                        <option value="Business">Business</option>
                        <option value="Celebration">Anniversary</option>
                        <option value="Birthday">Birthday</option>
                    </Select>
                </Box>
                <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel htmlFor="seating">Seating Option</FormLabel>
                    <RadioGroup
                        id='seating'
                        name="seating"
                        value={formik.values.seating}
                        onChange={(value) => formik.setFieldValue("seating", value)}
                         aria-labelledby="seating-label"
                    >
                        <HStack>
                            <Radio value="Indoor">Indoor</Radio>
                            <Radio value="Outdoor">Outdoor</Radio>
                        </HStack>
                    </RadioGroup>
                </Box>
                <Box w={{ base: "100%", md: "50%" }}>
                    <FormLabel htmlFor="specialRequest">Special Requests</FormLabel>
                    <Textarea
                        id='specialRequest'
                        name="specialRequest"
                        value={formik.values.specialRequest}
                        onChange={formik.handleChange}
                        placeholder="Any special requests?"
                        focusBorderColor="secondary.100"
                    />
                </Box>
                <HStack spacing={4}>
                    <Button type="button" onClick={onBack} size="lg" variant="ghost" color="secondary.100">
                        Back
                    </Button>
                    <Button type="submit" bg="primary.200" color="primary.100" size="lg" _hover={{ bg: "secondary.100" }} isLoading={formik.isSubmitting}>
                        Reserve Table
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default StepReservationInfo;
