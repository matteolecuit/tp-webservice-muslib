package fr.ynov.webservice.restTP.security;

public class SecurityConstants {
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final long EXPIRATION_TIME = 86_400_000; // 1 days
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/utilisateur/register";
    public static final String INIT_URL = "/init";
    public static final String ALBUM_RANDOM_URL = "/album/random";
    public static final String ARTISTE_RANDOM_URL = "/artiste/random";
}
