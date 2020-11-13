package fr.ynov.webservice.restTP.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Administrateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String pseudo;

    public Administrateur(String email, String pseudo) {
        this.email = email;
        this.pseudo = pseudo;
    }
}
