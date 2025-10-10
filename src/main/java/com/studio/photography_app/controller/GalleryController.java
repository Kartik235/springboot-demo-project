//package  com.studio.photography_app.controller;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.File;
//import java.io.IOException;
//import java.nio.file.*;
//import java.util.*;
//import java.util.stream.Collectors;
//
//@RestController
//@RequestMapping("/api/admin/gallery")
//public class GalleryController {
//
//    private static final String BASE_PATH = "src/main/resources/static/gallery/";
//
//    // ✅ Upload API
//    @PostMapping("/upload")
//    public ResponseEntity<String> uploadImage(@RequestParam("category") String category,
//                                              @RequestParam("image") MultipartFile image) {
//        try {
//            // Ensure category folder exists
//            Path folderPath = Paths.get(BASE_PATH + category);
//            if (!Files.exists(folderPath)) {
//                Files.createDirectories(folderPath);
//            }
//
//            // Save file
//            String filename = System.currentTimeMillis() + "_" + image.getOriginalFilename();
//            Path filePath = folderPath.resolve(filename);
//            Files.write(filePath, image.getBytes());
//
//            return ResponseEntity.ok("Image uploaded successfully: " + filename);
//        } catch (IOException e) {
//            return ResponseEntity.status(500).body("Error uploading image");
//        }
//    }
//
//    // ✅ Fetch API (used by wedding.html, prewedding.html, babyshower.html)
//    @GetMapping("/{category}")
//    public ResponseEntity<List<String>> getGalleryImages(@PathVariable String category) {
//        try {
//            Path folderPath = Paths.get(BASE_PATH + category);
//            File folder = folderPath.toFile();
//
//            if (!folder.exists() || !folder.isDirectory()) {
//                return ResponseEntity.ok(Collections.emptyList());
//            }
//
//            List<String> imageUrls = Arrays.stream(Objects.requireNonNull(folder.listFiles()))
//                    .filter(File::isFile)
//                    .map(file -> "/gallery/" + category + "/" + file.getName())
//                    .collect(Collectors.toList());
//
//            return ResponseEntity.ok(imageUrls);
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body(Collections.emptyList());
//        }
//    }
//}

package com.studio.photography_app.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin/gallery")
public class GalleryController {

    // Save files outside src (project root folder "uploads/gallery/")
    private static final String BASE_PATH = "uploads/gallery/";

    // ✅ Upload API
    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("category") String category,
                                              @RequestParam("image") MultipartFile image) {
        try {
            // Ensure category folder exists
            Path folderPath = Paths.get(BASE_PATH + category);
            if (!Files.exists(folderPath)) {
                Files.createDirectories(folderPath);
            }

            // Save file
            String filename = System.currentTimeMillis() + "_" + image.getOriginalFilename();
            Path filePath = folderPath.resolve(filename);
            Files.write(filePath, image.getBytes());

            return ResponseEntity.ok("Image uploaded successfully: " + filename);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error uploading image");
        }
    }

    // ✅ Fetch API
    @GetMapping("/{category}")
    public ResponseEntity<List<String>> getGalleryImages(@PathVariable String category) {
        try {
            Path folderPath = Paths.get(BASE_PATH + category);
            File folder = folderPath.toFile();

            if (!folder.exists() || !folder.isDirectory()) {
                return ResponseEntity.ok(Collections.emptyList());
            }

            List<String> imageUrls = Arrays.stream(Objects.requireNonNull(folder.listFiles()))
                    .filter(File::isFile)
                    .map(file -> "/gallery/" + category + "/" + file.getName())
                    .collect(Collectors.toList());

            return ResponseEntity.ok(imageUrls);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Collections.emptyList());
        }
    }

    // Delete API
    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteImage(@RequestParam("category") String category,
                                              @RequestParam("filename") String filename) {
        try {
            Path filePath = Paths.get(BASE_PATH + category + "/" + filename);
            File file = filePath.toFile();

            if (!file.exists()) {
                return ResponseEntity.status(404).body("File not found");
            }

            if (file.delete()) {
                return ResponseEntity.ok("File deleted successfully");
            } else {
                return ResponseEntity.status(500).body("Failed to delete file");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting file");
        }
    }

}

