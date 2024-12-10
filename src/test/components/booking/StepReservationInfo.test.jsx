import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StepReservationInfo from "../../../components/booking/StepReservationInfo";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("StepReservationInfo Component", () => {
    const reservationInfo = {
        date: "",
        time: "",
        guests: "",
        occasion: "",
        seating: "",
        specialRequest: "",
    };
    const mockSetReservationInfo = vi.fn();
    const mockOnBack = vi.fn();
    const mockOnReserve = vi.fn();

    beforeEach(() => {
        mockSetReservationInfo.mockClear();
        mockOnBack.mockClear();
        mockOnReserve.mockClear();
    });

    it("renders all fields and buttons", () => {
        render(
            <StepReservationInfo
                reservationInfo={reservationInfo}
                setReservationInfo={mockSetReservationInfo}
                onBack={mockOnBack}
                onReserve={mockOnReserve}
            />
        );

        // Check for all input fields
        expect(screen.getByLabelText(/Date\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Time\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
        expect(screen.getByText(/Seating Option/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Special Requests/i)).toBeInTheDocument();

        // Check for buttons
        expect(screen.getByRole("button", { name: /Back/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Reserve Table/i })).toBeInTheDocument();
    });

    it("displays validation errors for invalid inputs", async () => {
        render(
            <StepReservationInfo
                reservationInfo={reservationInfo}
                setReservationInfo={mockSetReservationInfo}
                onBack={mockOnBack}
                onReserve={mockOnReserve}
            />
        );

        // Submit form with no inputs
        fireEvent.click(screen.getByRole("button", { name: /Reserve Table/i }));

        // Check for error messages
        expect(await screen.findByText(/Please enter a reservation date/i)).toBeInTheDocument();
        expect(await screen.findByText(/Please enter a reservation time/i)).toBeInTheDocument();
        expect(await screen.findByText(/Please enter the number of guests/i)).toBeInTheDocument();
    });

    it("submits valid inputs and calls callbacks", async () => {
        render(
            <StepReservationInfo
                reservationInfo={reservationInfo}
                setReservationInfo={mockSetReservationInfo}
                onBack={mockOnBack}
                onReserve={mockOnReserve}
            />
        );

        // Fill in valid inputs
        fireEvent.change(screen.getByLabelText(/Date\*/i), { target: { value: "2024-12-15" } });
        fireEvent.change(screen.getByLabelText(/Time\*/i), { target: { value: "18:00" } });
        fireEvent.change(screen.getByLabelText(/Number of Guests\*/i), { target: { value: 4 } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "Birthday" } });
        fireEvent.click(screen.getByLabelText(/Indoor/i));

        // Submit the form
        fireEvent.click(screen.getByRole("button", { name: /Reserve Table/i }));

        // Validate callback invocation with correct data
        await waitFor(() => {
        expect(mockSetReservationInfo).toHaveBeenCalledWith({
            date: "2024-12-15",
            time: "18:00",
            guests: 4,
            occasion: "Birthday",
            seating: "Indoor",
            specialRequest: "",
        });
        expect(mockOnReserve).toHaveBeenCalled();
        });
    });

    it("calls onBack when the Back button is clicked", () => {
        render(
            <StepReservationInfo
                reservationInfo={reservationInfo}
                setReservationInfo={mockSetReservationInfo}
                onBack={mockOnBack}
                onReserve={mockOnReserve}
            />
        );

        // Click the Back button
        fireEvent.click(screen.getByRole("button", { name: /Back/i }));

        // Validate onBack callback
        expect(mockOnBack).toHaveBeenCalled();
    });
});
