package gnrd.myapp4.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gnrd.myapp4.entities.Category;
import gnrd.myapp4.repositories.CategoryRepository;

@Service
@Transactional
public class CategoryService {
    
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories(){
        return this.categoryRepository.findAll();
    }

    public void createCategory(Category category){
        this.categoryRepository.save(category);
    }
}
