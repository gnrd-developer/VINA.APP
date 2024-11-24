package gnrd.myapp4.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import gnrd.myapp4.entities.Category;

public interface CategoryRepository extends 
JpaRepository<Category,String>{
    
}
