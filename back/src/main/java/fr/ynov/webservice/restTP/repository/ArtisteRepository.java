package fr.ynov.webservice.restTP.repository;

import fr.ynov.webservice.restTP.entity.Artiste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtisteRepository extends JpaRepository<Artiste, Long> {
}
