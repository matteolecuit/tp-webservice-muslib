package fr.ynov.webservice.restTP.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
public class Administrateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne(targetEntity = Utilisateur.class, mappedBy = "admin")
    private Utilisateur users_admin;
}
