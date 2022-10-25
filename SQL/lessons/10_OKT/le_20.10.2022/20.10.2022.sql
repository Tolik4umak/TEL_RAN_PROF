/*
██      ███████ ███████ ███████  ██████  ███    ██      ██ 
██      ██      ██      ██      ██    ██ ████   ██     ███ 
██      █████   ███████ ███████ ██    ██ ██ ██  ██      ██ 
██      ██           ██      ██ ██    ██ ██  ██ ██      ██ 
███████ ███████ ███████ ███████  ██████  ██   ████      ██ 
*/
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
                                                                
drop table goods;
show tables;

/*

██   ██ ██     ██      ██ 
██   ██ ██     ██     ███ 
███████ ██  █  ██      ██ 
██   ██ ██ ███ ██      ██ 
██   ██  ███ ███       ██ 
                    
*/
use TOLIKDATABASE;

drop table goods;

show tables;

CREATE TABLE goods(
id integer primary key auto_increment,
title varchar(128),
quantity varchar(128),
price integer 
);

	-- Проверьте содержимое таблицы
SELECT *
From goods;
	-- Добавьте 10 строк
insert into goods (title, quantity, price) values ('самокат', '10', 500),
												('велосипед', '120', 7000),
                                                ('ролики', '300', 4500),
                                                ('скейт', '50', 2500),
                                                ('рипстик', '30', 900),
                                                ('подшипники', '1500', 150),
                                                ('моноколесо', '15', 8000),
                                                ('шлем', '35', 300),
                                                ('наколенники', '10', 400),
                                                ('насос', '23', 180);
	-- Найдите товары дешевле 1000
SELECT *
FROM goods
WHERE price <1000;
	-- Найдите товары, начинающиеся на А
SELECT *
FROM goods
WHERE title LIKE ('Н%');
	-- Удалите товары дороже 1000 
delete from goods
where price > 1000;
	-- Очистите всю таблицу 
delete from goods;
	
set sql_safe_updates = 0;  -- выключает безопастный режим




/*
██      ███████ ███████ ███████  ██████  ███    ██     ██████      
██      ██      ██      ██      ██    ██ ████   ██          ██     
██      █████   ███████ ███████ ██    ██ ██ ██  ██      █████      
██      ██           ██      ██ ██    ██ ██  ██ ██     ██          
███████ ███████ ███████ ███████  ██████  ██   ████     ███████
*/

use TOLIKDATABASE;

select
*
from goods;

delete from goods 
where title like 'н%';

delete from goods 
where quantity like '%0';

delete from goods ;



create table students (
	id integer primary key auto_increment,
    firstname varchar(128) not null,
    lastname varchar(128) not null,
    age integer check(age>20),
    avg_mark numeric(2,1) check(avg_mark between 0 and 5) default 3.0
);

select
*
from students;

insert into students (firstname, lastname, age, avg_mark) values ('Anatolii', 'Chumak', 28,4.8),
																('Violetta', 'Chumak', 27,4.8);
																	
insert into students (firstname, lastname, age) values ('Ivan', 'Ivanov', 25);

delete from students ;














