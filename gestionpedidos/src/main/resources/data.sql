/* Users */
insert into user_table (id, name, email, pass) values
(1, 'Bilbo Baggins', 'bilbo@lotr.com', '1234'),
(2, 'Frodo Baggins', 'frodo@lotr.com', '1234');


/* Orders */
insert into order_table (id, first_plate, second_plate, dessert, date, user_id) values
(1, 'Ensalada murciana', 'Fideuá', 'Fruta de temporada', '2019-06-05', 1),
(2, 'Ensalada alicantina', 'Paella de pollo', 'Brownie', '2019-06-05', 2);