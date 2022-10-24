-- coment
/* multi 
string
coment*/
create database TOLIKDATABASE;
use TOLIKDATABASE;
show databases;


CREATE TABLE goods ;
(
  id int PRIMARY KEY,
  title varchar(30),
  quantity int CHECK(quantity>0),
  price int, 
  in_stock char(1) CHECK(in_stock in ('Y','N'))
);

show tables;

CREATE TABLE goods2 
(
  id int PRIMARY KEY,
  title varchar(30),
  quantity int CHECK(quantity>0),
  price int, 
  in_stock char(1) CHECK(in_stock in ('Y','N'))
);

SELECT * 
FROM goods;
show tables;
drop table goods2;
-- Удаляем базу данных
create database Tolikdatatwo;
drop database Tolikdatatwo;

INSERT into goods (id, title, quantity, price, in_stock) VALUES(2,'a',2,3200,'Y'),
																(3,'a',3,3300,'Y');



