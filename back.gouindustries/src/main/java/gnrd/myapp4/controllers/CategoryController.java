package gnrd.myapp4.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gnrd.myapp4.entities.Category;
import gnrd.myapp4.entities.Message;
import gnrd.myapp4.services.CategoryService;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<Object> getAll(){
        return new ResponseEntity<Object>(this
        .categoryService.getAllCategories(), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Message> create
    (@RequestBody Category category){
        this.categoryService.createCategory(category);
        return new ResponseEntity<>(new Message
        ("creado"), HttpStatus.OK);
    }
    
}
