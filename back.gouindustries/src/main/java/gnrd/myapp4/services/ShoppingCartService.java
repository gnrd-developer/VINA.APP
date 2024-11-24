package gnrd.myapp4.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import gnrd.myapp4.entities.ShoppingCart;
import gnrd.myapp4.repositories.ShoppingCartRepository;

@Service
@Transactional
public class ShoppingCartService {

    private final ShoppingCartRepository shoppingCartRepository;


    @Autowired
    public ShoppingCartService(ShoppingCartRepository shoppingCartRepository) {
        this.shoppingCartRepository = shoppingCartRepository;
    }//###### este es el metodo constructor #######
 
    
    public void removeProduct(String id){
        this.shoppingCartRepository.deleteById(id);
    }

    public void addProduct(ShoppingCart shoppingCart){
        if (shoppingCart == null) {
            throw new RuntimeException("El carrito de compras no puede ser nulo");
        }
        if (shoppingCart.getProduct() == null) {
            throw new RuntimeException("El producto no puede ser nulo");
        }
        if (shoppingCart.getAmount() <= 0) {
            throw new RuntimeException("La cantidad debe ser mayor que 0");
        }
        this.shoppingCartRepository.save(shoppingCart);
    }

    public List<ShoppingCart> getShoppingCartByClientId(String clientId) {
        return this.shoppingCartRepository.findByClientId(clientId);
    }
}