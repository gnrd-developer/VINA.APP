select * from category;
select * from sub_category;
select * from product;

delete from sub_category where id = 3;

//CATEGORIA

insert into category (id,image,name) values (1,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/008%20Rainy%20Ashville.png',
'Productos Y Servicios'),(2,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/005%20Young%20Passion.png',
'Prendas Y Artículos De Vestir'),(3,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/007%20Sunny%20Morning.png',
'Comida Y Bebida');

/*FIN INSERTAR CATEGORIA*/


/*INSERT SUB CATEGORY*/

insert into sub_category (id,image,name,category_id) values (1,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/020%20New%20Life.png',
'Productos',1),(2,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/011%20Dusty%20Grass.png',
'Servicios',1),(3,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/005%20Young%20Passion.png',
'Prendas De Vestir',2),(4,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/007%20Sunny%20Morning.png',
'Artículos De Vestir',2),(5,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/014%20Amy%20Crisp.png',
'Comidas',3),(6,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/008%20Rainy%20Ashville.png',
'Bebidas',3);

/*FIN INSERT SUB CATEGORY*/


/*INSERT PRODUCT*/

insert into product (id,image,img2,img3,img4,name,sub_category_id,description,price) 
values (1,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/007%20Sunny%20Morning.png',
'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/014%20Amy%20Crisp.png',
'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/008%20Rainy%20Ashville.png',
'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/005%20Young%20Passion.png',
'polera',1,'Esta nuevo',4000),(2,'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/007%20Sunny%20Morning.png',
'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/014%20Amy%20Crisp.png',
'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/008%20Rainy%20Ashville.png',
'https://raw.githubusercontent.com/gnrd-developer/IMAGENES/refs/heads/main/OTROS/005%20Young%20Passion.png',
'Short',1,'Esta nuevo',8000);

/*FIN insert PRODUCT*/