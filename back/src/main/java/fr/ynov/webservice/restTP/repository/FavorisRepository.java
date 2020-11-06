package fr.ynov.webservice.restTP.repository;

import fr.ynov.webservice.restTP.model.Favoris;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavorisRepository extends JpaRepository<Favoris, Long> {
}
