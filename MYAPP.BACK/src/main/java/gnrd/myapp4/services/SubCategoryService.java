package gnrd.myapp4.services;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gnrd.myapp4.entities.SubCategory;
import gnrd.myapp4.repositories.SubCategoryRepository;

@Service
@Transactional
public class SubCategoryService {
    private final SubCategoryRepository subCategoryRepository;


    @Autowired
    public SubCategoryService(SubCategoryRepository subCategoryService) {
        this.subCategoryRepository = subCategoryService;
    }

    public List<SubCategory> getSubCategoriesByCategory
    (String name){
        return this.subCategoryRepository.findByCategory_Name(name);
    }

    
    public void saveSubCategory(SubCategory subCategory){
        this.subCategoryRepository.save(subCategory);
    }
    //public void saveSubCategory(Optional<SubCategory> subCategoryOptional) {
    //    subCategoryOptional.ifPresent(this.subCategoryRepository::save);
    //}
    

    public List<SubCategory> findAll(){
        return this.subCategoryRepository.findAll();
    }
    
}
