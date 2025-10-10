//package com.studio.photography_app.controller;
//
//import com.studio.photography_app.model.Review;
//import com.studio.photography_app.service.ReviewService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/review")
//@CrossOrigin(origins = "*")
//public class ReviewController {
//
//    @Autowired
//    private ReviewService reviewService;
//
//    @PostMapping("/create")
//    public ResponseEntity<?> createReview(@RequestBody Review review) {
//        return ResponseEntity.ok(reviewService.saveReview(review));
//    }
//}

package com.studio.photography_app.controller;

import com.studio.photography_app.model.Review;
import com.studio.photography_app.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/review")
@CrossOrigin(origins = "*") // allow all origins; you can replace "*" with your frontend URL
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // POST: create a new review
    @PostMapping("/create")
    public ResponseEntity<?> createReview(@RequestBody Review review) {
        return ResponseEntity.ok(reviewService.saveReview(review));
    }

    // GET: fetch all reviews (optional but useful)
    @GetMapping("/all")
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviews = reviewService.getAllReviews();
        return ResponseEntity.ok(reviews);
    }
}

