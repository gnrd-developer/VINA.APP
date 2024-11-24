package gnrd.myapp4.controllers;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class CookieUtils {

    /**
     * Crea una cookie con el nombre y valor especificados.
     *
     * @param response Respuesta HTTP.
     * @param name     Nombre de la cookie.
     * @param value    Valor de la cookie.
     * @param maxAge   Tiempo de vida de la cookie en segundos.
     */
    public static void createCookie(HttpServletResponse response, String name, String value, int maxAge) {
        Cookie cookie = new Cookie(name, value);
        cookie.setMaxAge(maxAge);
        response.addCookie(cookie);
    }

    /**
     * Obtiene el valor de una cookie por su nombre.
     *
     * @param request Solicitud HTTP.
     * @param name    Nombre de la cookie.
     * @return Valor de la cookie o null si no existe.
     */
    public static String getCookieValue(HttpServletRequest request, String name) {
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(name)) {
                    return cookie.getValue();
                }
            }
        }
        return null;
    }

    /**
     * Elimina una cookie por su nombre.
     *
     * @param response Respuesta HTTP.
     * @param name     Nombre de la cookie.
     */
    public static void deleteCookie(HttpServletResponse response, String name) {
        Cookie cookie = new Cookie(name, null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
    }
}