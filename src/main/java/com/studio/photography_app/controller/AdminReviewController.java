package com.studio.photography_app.controller;

import com.studio.photography_app.model.Review;
import com.studio.photography_app.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/reviews")
public class AdminReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    // Fetch all reviews
    @GetMapping("/all")
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    // Delete review by ID
    @DeleteMapping("/delete/{id}")
    public String deleteReview(@PathVariable Long id) {
        if (reviewRepository.existsById(id)) {
            reviewRepository.deleteById(id);
            return "Review deleted successfully!";
        } else {
            return "Review not found!";
        }
    }
}
