package gnrd.myapp4.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gnrd.myapp4.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,String>{
    List<Product> findBySubCategory_NameAndIdNot(String category,String id);
    List<Product> findBySubCategory_Name(String category);
}
