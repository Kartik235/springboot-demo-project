package com.studio.photography_app.repository;

import com.studio.photography_app.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
