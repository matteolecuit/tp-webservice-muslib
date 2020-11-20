package fr.ynov.webservice.restTP.security;

import fr.ynov.webservice.restTP.service.UtilisateurService;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {
    private final UtilisateurService utilisateurService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public WebSecurity(UtilisateurService utilisateurService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.utilisateurService = utilisateurService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable().authorizeRequests()
                .antMatchers(HttpMethod.POST, SecurityConstants.SIGN_UP_URL).permitAll()
                .antMatchers(HttpMethod.POST, SecurityConstants.SIGN_IN_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.INIT_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.ALBUM_RANDOM_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.ARTISTE_RANDOM_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.ALBUM_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.ARTISTE_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.TITRE_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.DOC_URL).permitAll()
                .antMatchers(HttpMethod.GET, SecurityConstants.RESOURCE_DOC_URL).permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilter(new JWTAuthenticationFilter(authenticationManager()))
                .addFilter(new JWTAuthorizationFilter(authenticationManager()))
                // this disables session creation on Spring Security
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(utilisateurService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("");
        config.addAllowedHeader("");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return source;
    }

}
