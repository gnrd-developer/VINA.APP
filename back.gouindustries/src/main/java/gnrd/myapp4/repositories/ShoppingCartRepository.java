package gnrd.myapp4.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import gnrd.myapp4.entities.ShoppingCart;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, String> {
    @Query("SELECT sc FROM ShoppingCart sc WHERE sc.id = :clientId")
    List<ShoppingCart> findByClientId(@Param("clientId") String clientId);
}
