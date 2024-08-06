package gnrd.myapp4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gnrd.myapp4.entities.Message;
import gnrd.myapp4.entities.SubCategory;
import gnrd.myapp4.services.SubCategoryService;

@RestController
@RequestMapping("/subCategory")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SubCategoryController {
    
    @Autowired
    private SubCategoryService subCategoryService;

    @GetMapping(value = "/{categoryname}")
    public ResponseEntity<Object> getSubCategories (@PathVariable String categoryname){
        return new ResponseEntity<>
        (this.subCategoryService.getSubCategoriesByCategory
        (categoryname), HttpStatus.OK);
    }


    @PostMapping()
    public ResponseEntity<Message> create
    (@RequestBody SubCategory subCategory){
        this.subCategoryService.saveSubCategory
        (subCategory);
        return new ResponseEntity<>
        (new Message("creado"), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<Object> getAllSubCategories(){
        return new ResponseEntity<>(this.subCategoryService
        .findAll(), HttpStatus.OK);
    }
}
