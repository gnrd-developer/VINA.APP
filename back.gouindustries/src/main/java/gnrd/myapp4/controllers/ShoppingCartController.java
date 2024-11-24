package gnrd.myapp4.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import gnrd.myapp4.entities.Message;
import gnrd.myapp4.entities.ShoppingCart;
import gnrd.myapp4.services.ShoppingCartService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/shoppingList")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    // METODO POST PARA AGREGAR PRODUCTOS AL CARRITO Y ALMACENARLOS EN COOKIE
    @PostMapping()
    public ResponseEntity<Message> addProduct( @RequestBody ShoppingCart shoppingCart,
    HttpServletResponse response)
    {

        shoppingCartService.addProduct(shoppingCart);
        CookieUtils.createCookie(response, "shopping_cart_id", shoppingCart.getId(), 7 * 24 * 60 * 60);
        return new ResponseEntity<>(new Message("Producto agregado al carrito"), HttpStatus.OK);

    }

    // METODO PARA VER LOS PRODUCTOS EN EL CARRO
    @GetMapping()
    public ResponseEntity<List<ShoppingCart>> getListByClient(HttpServletRequest request) {

        String cartId = CookieUtils.getCookieValue(request, "shopping_cart_id");
        List<ShoppingCart> shoppingCarts = shoppingCartService.getShoppingCartByClientId(cartId);
        return new ResponseEntity<>(shoppingCarts, HttpStatus.OK);

    }

}
