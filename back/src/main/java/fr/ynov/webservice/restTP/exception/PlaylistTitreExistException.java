package fr.ynov.webservice.restTP.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT, reason = "L'utilisateur existe déjà")
public class PlaylistTitreExistException extends RuntimeException{

        public PlaylistTitreExistException(String message) {
            super(message);
        }
}
