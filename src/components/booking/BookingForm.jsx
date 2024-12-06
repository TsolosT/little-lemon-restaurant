import { useContext } from "react";
import { BookingContext } from "../../context/booking/BookingContext";
import { Box, VStack, Progress, HStack, Text } from "@chakra-ui/react";
import StepBasicInfo from "./StepBasicInfo";
import StepReservationInfo from "./StepReservationInfo";
import ReservationSummary from "./ReservationSummary";

const BookingForm = () => {
    const { state, dispatch } = useContext(BookingContext);

    const handleNext = () => dispatch({ type: "NEXT_STEP" });

    const handleBack = () => dispatch({ type: "PREVIOUS_STEP" });

    const handleReserve = () => dispatch({ type: "REVERSE_STEP" });


    const stepLabels = ["Basic Info", "Reservation Info", "Confirmation"];
    const progress = (state.step / stepLabels.length) * 100;

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
                            fontWeight={index + 1 === state.step ? "bold" : "normal"}
                            color={index + 1 <= state.step ? "primary.200" : "gray.400"}
                        >
                            {label}
                        </Text>
                    ))}
                </HStack>
            </Box>

            {/* Step Content */}
            <Box w="100%">
                {state.step === 1 && <StepBasicInfo
                        basicInfo={state.basicInfo}
                        setBasicInfo={(info) =>
                            dispatch({ type: "SET_BASIC_INFO", payload: info })
                        }
                        onNext={handleNext}
                    />
                }
                {state.step === 2 && (
                    <StepReservationInfo
                        reservationInfo={state.reservationInfo}
                        setReservationInfo={(info) =>
                            dispatch({ type: "SET_RESERVATION_INFO", payload: info })
                        }
                        onBack={handleBack}
                        onReserve={handleReserve}
                    />
                )}
                {state.step === 3 && <ReservationSummary    basicInfo={state.basicInfo}
                    reservationInfo={state.reservationInfo} />}
            </Box>
        </VStack>
    );
};

export default BookingForm;
