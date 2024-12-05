import { useState } from "react";
import { Box, VStack, Progress, HStack, Text } from "@chakra-ui/react";
import StepBasicInfo from "./StepBasicInfo";
import StepReservationInfo from "./StepReservationInfo";
import ReservationSummary from "./ReservationSummary";

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: 1,
        occasion: "Casual",
        seating: "Indoor",
        specialRequest: "",
    });

    const handleNext = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep(step + 1);
    };

    const handleBack = () => setStep(step - 1);

    const handleReserve = (data) => {
        setFormData((prev) => ({ ...prev, ...data }));
        setStep(3);
    };

    const stepLabels = ["Basic Info", "Reservation Info", "Confirmation"];
    const progress = (step / stepLabels.length) * 100;

    return (
        <VStack spacing={6} p={4} width='100%'>
            {/* Step Progress Bar */}
            <Box w="100%">
                <Progress value={progress} size="xs"  sx={{
                        "& > div": { // Target the filled bar
                            backgroundColor: "primary.200",
                        },
                    }}
                />
                <HStack justify="space-between" mt={2}>
                    {stepLabels.map((label, index) => (
                        <Text
                            key={index}
                            fontSize="sm"
                            fontWeight={index + 1 === step ? "bold" : "normal"}
                            color={index + 1 <= step ? "primary.200" : "gray.400"}
                        >
                            {label}
                        </Text>
                    ))}
                </HStack>
            </Box>

            {/* Step Content */}
            <Box w="100%">
                {step === 1 && <StepBasicInfo formData={formData} onNext={handleNext} />}
                {step === 2 && (
                    <StepReservationInfo
                        formData={formData}
                        onBack={handleBack}
                        onReserve={handleReserve}
                    />
                )}
                {step === 3 && <ReservationSummary reservationData={formData} />}
            </Box>
        </VStack>
    );
};

export default BookingForm;
