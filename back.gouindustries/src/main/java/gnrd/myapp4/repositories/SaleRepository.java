package gnrd.myapp4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import gnrd.myapp4.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale,String> {

}
