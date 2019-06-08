/* Users */
insert into user_table (id, name, email, pass) values
(1, 'Administrador', 'admin@admin', 'admin');


/* Orders */
insert into order_table (id, first_plate, second_plate, dessert, date, user_id, state) values
(1, 'Ensalada murciana', 'Fideuá', 'Fruta de temporada', '2019-06-05', 1, 0),
(2, 'Ensalada alicantina', 'Paella de pollo', 'Brownie', '2019-06-05', 1, 1);


/* Plates */
insert into plate_table (id, name, type) values
(1, 'Ensalada murciana', 0),
(2, 'Ensalada alicantina', 0),
(3, 'Ensaladilla rusa', 0),
(4, 'Pincho de tortilla', 0),
(5, 'Fideuá', 1),
(6, 'Paella de pollo', 1),
(7, 'Lomo adobado con patatas', 1),
(8, 'Ternera en salsa', 1),
(9, 'Macarrones al horno', 1),
(10, 'Fruta de temporada', 2),
(11, 'Brownie con helado', 2),
(12, 'Tarta de manzana', 2),
(13, 'Natillas', 2),
(14, 'Poffertjes', 2);