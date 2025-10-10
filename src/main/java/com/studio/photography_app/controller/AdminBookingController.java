package com.studio.photography_app.controller;

import com.studio.photography_app.model.Booking;
import com.studio.photography_app.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminBookingController {

    @Autowired
    private BookingRepository bookingRepository;

    // Fetch all bookings
    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Delete booking by ID
    @DeleteMapping("/delete/{id}")
    public String deleteBooking(@PathVariable Long id) {
        if (bookingRepository.existsById(id)) {
            bookingRepository.deleteById(id);
            return "Booking deleted successfully!";
        } else {
            return "Booking not found!";
        }
    }
}
