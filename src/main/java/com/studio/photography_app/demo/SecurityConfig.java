//package com.studio.photography_app.demo;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()
//                .authorizeHttpRequests(auth -> auth
//                        // Allow static resources and frontend pages
//                        .requestMatchers(
//                                "/",                           // root URL
//                                "/favicon.ico",                // favicon
//                                "/startbootstrap-creative-gh-pages/**", // all template files
//                                "/signup.html",
//                                "/login.html",
//                                "/index.html",
//                                "/css/**",
//                                "/js/**",
//                                "/images/**",
//                                "/api/auth/**",  // auth APIs
//                                "/api/booking",  // booking API
//                                "/api/review"    // review API
//                        ).permitAll()
//                        .anyRequest().authenticated()
//                )
//                .httpBasic().disable()
//                .formLogin().disable()
//                .logout().disable();
//
//        return http.build();
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}



package com.studio.photography_app.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeHttpRequests(auth -> auth
                        // Allow static resources and frontend pages
                        .requestMatchers(
                                "/",                           // root URL
                                "/favicon.ico",                // favicon
                                "/startbootstrap-creative-gh-pages/**", // all template files
                                "/signup.html",
                                "/login.html",
                                "/index.html",
                                "/css/**",
                                "/js/**",
                                "/images/**",
                                "/api/auth/**",     // auth APIs
                                "/api/booking/**",  // booking APIs
                                "api/review/**",    // review APIs
                                "/api/admin/**",
                                "/gallery/**",
                                "/**/*.html"
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                .httpBasic().disable()
                .formLogin().disable()
                .logout().disable();

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

