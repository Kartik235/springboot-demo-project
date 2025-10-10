//package com.studio.photography_app.service;
//
//import com.studio.photography_app.model.Review;
//import com.studio.photography_app.repository.ReviewRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class ReviewService {
//
//    @Autowired
//    private ReviewRepository reviewRepository;
//
//    public Review saveReview(Review review) {
//        return reviewRepository.save(review);
//    }
//}
package com.studio.photography_app.service;

import com.studio.photography_app.model.Review;
import com.studio.photography_app.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;  // <-- import this

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    // Save a review
    public Review saveReview(Review review) {
        return reviewRepository.save(review);
    }

    // Fetch all reviews
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }
}
