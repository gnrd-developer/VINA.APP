package gnrd.myapp4.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import gnrd.myapp4.entities.SubCategory;

public interface SubCategoryRepository extends
JpaRepository<SubCategory,String>{
    List<SubCategory> findByCategory_Name(String categoryName);
}
