package com.example.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity

public class WebSecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtRequestFilter;

    @Autowired
    private AuthenticationProvider authenticationProvider;


    @Bean
    protected SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable().cors().and()
                .authorizeRequests()
                .antMatchers(
                        //All role
                        "/api/auth/**",

                        "/courses/**",
                        "/videos/**",
                        "/carts/**",
                        "/courseTypes",
                        "/favorites/**",
                        "/purchases/**",
                        "/comments/all",
                        "/check",
                        "/comments/review",
                        "/questions/**"

                ).permitAll()
                .antMatchers(


                        "/api/students/**",
                        "/api/instructors/**"


                ).hasAnyAuthority("ROLE_INSTRUCTOR", "ROLE_STUDENT")

                .anyRequest()
                .authenticated()
                .and()
                .exceptionHandling()
                .and().authenticationProvider(authenticationProvider)
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();

//        httpSecurity
//                .authorizeRequests()
//                .anyRequest().permitAll()
//                .and()
//                .csrf().disable();
    }

}