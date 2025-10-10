package com.studio.photography_app.controller;

import com.studio.photography_app.model.Booking;
import com.studio.photography_app.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "*")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/create")
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) {
        return ResponseEntity.ok(bookingService.saveBooking(booking));
    }
}
