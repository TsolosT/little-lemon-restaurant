import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BookingContext } from "../../../context/booking/BookingContext";
import BookingForm from "../../../components/booking/BookingForm";
import { ChakraProvider } from "@chakra-ui/react";
import { describe, it, expect, vi } from 'vitest';


// Mock initial context state
const mockState = {
    step: 1,
    basicInfo: { name: "", email: "" },
    reservationInfo: { date: "", time: "", guests: 1, occasion: "", seating: "", specialRequest: "" },
};

const mockDispatch = vi.fn();

// Wrapper component to provide context
const Wrapper = ({ children }) => (
    <ChakraProvider>
        <BookingContext.Provider value={{ state: mockState, dispatch: mockDispatch }}>
            {children}
        </BookingContext.Provider>
    </ChakraProvider>
);

describe("BookingForm", () => {
    it("renders the correct step", () => {
        render(<BookingForm />, { wrapper: Wrapper });

        // Verify the first step (Basic Info) is rendered
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it("renders the progress bar correctly", () => {
        render(<BookingForm />, { wrapper: Wrapper });
        // Ensure the progress bar element exists before checking the value
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toBeInTheDocument();
    });


    it("renders Reservation Info step correctly", () => {
        // Mock state for step 2 (Reservation Info)
        mockState.step = 2;

        render(<BookingForm />, { wrapper: Wrapper });

        // Verify the elements for Reservation Info step are rendered
        expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    });

    it("handles Back button click", () => {
        render(<BookingForm />, { wrapper: Wrapper });

        // Simulate clicking the Back button
        fireEvent.click(screen.getByText(/back/i));

        // Check if dispatch was called to go to the previous step
        expect(mockDispatch).toHaveBeenCalledWith({ type: "PREVIOUS_STEP" });
    });

});
