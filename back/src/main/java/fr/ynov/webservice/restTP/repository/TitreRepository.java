package fr.ynov.webservice.restTP.repository;

import fr.ynov.webservice.restTP.model.Titre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TitreRepository extends JpaRepository<Titre, Long> {
}
