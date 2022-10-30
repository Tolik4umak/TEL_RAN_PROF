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




/*
██████  ██████   █████   ██████ ████████ ██ ███████ ███████      ██ 
██   ██ ██   ██ ██   ██ ██         ██    ██ ██      ██          ███ 
██████  ██████  ███████ ██         ██    ██ ███████ █████        ██ 
██      ██   ██ ██   ██ ██         ██    ██      ██ ██           ██ 
██      ██   ██ ██   ██  ██████    ██    ██ ███████ ███████      ██
*/



create database tasks;
show databases;

use tasks;

create table students (
id integer primary key auto_increment,
firstname varchar(128) not null,
lastname varchar(128) not null,
class integer check(class between 1 and 10),
sub varchar(128) NOT NULL,
mark integer check(mark between 0 and 5)
);

show tables;

select *
from students;


insert into students(firstname, lastname, class, sub, mark) values('Anna','Petrova',10,'math',5),
																('Tolik','Chumak',8,'phisic',4),
                                                                ('Ivan','Petrov',7,'bio',5),
                                                                ('Max','Maxov',10,'math',3),
                                                                ('Tania','Petrova',6,'geometry',0);






/*
██      ███████ ███████ ███████  ██████  ███    ██     ██████      
██      ██      ██      ██      ██    ██ ████   ██          ██     
██      █████   ███████ ███████ ██    ██ ██ ██  ██      █████      
██      ██           ██      ██ ██    ██ ██  ██ ██          ██     
███████ ███████ ███████ ███████  ██████  ██   ████     ██████      
*/

drop table if exists students;

show tables;

create table goods (
	id integer primary key auto_increment,
    title varchar(128),
    price integer,
    quantity integer check(quantity between 5 and 10)
);

insert into goods (title, price, quantity) values ('Aple',500,5),
												('Pinaple',1500,7),
                                                ('Lemon',700,6),
                                                ('Lime',300,9);
                                                


set sql_safe_updates = 0;  -- выключает безопастный режим


-- ALTER TABLE
-- используется для добавления б удаления и изменения полей, Можно добавлять или удалять ограничения 


-- добавление поля
alter table goods
add country varchar(128) default 'Berlin';


-- удаления поля
alter table goods
drop column country;


-- Изменения поля (типа данных)
alter table goods
modify column price numeric(6.2);

-- Изменения имени поля
alter table goods
change price item_price integer;

-- Удаление Ограничения
alter table goods
drop check goods_chk_1;

insert into goods (title, item_price, quantity) values ('Aple2',700,3);


-- Добавления ограничения
alter table goods
modify column quantity integer check(quantity between 0 and 10);

-- Изменения данных внутри таблицыalter
update goods 
set price = 2500
where title = 'Aple';

update goods 
set country = 'Ukraine'
where id % 2 = 0;

update goods 
set price = price/2;


alter table goods
change item_price price integer;


select *
from goods;

delete from goods
where id =9;




-- ЗАДАЧИ

-- 1
create table students(
	name varchar(128) not null,
    lastname varchar(128) not null,
    avg_mark numeric(2,1) check(avg_mark between 0 and 5 ),
    gender varchar(128) check(gender in ('M', 'F') )
);


-- 2
insert into students(name,lastname,avg_mark,gender) values ('Олег','Петров',4.3,'M'),
															('Семен','Степанов',3.1,'M'),
                                                            ('Ольга','Семенова',4.7,'F'),
                                                            ('Игорь','Романов',3.1,'M'),
                                                            ('Ирина','Иванова',2.2,'F');


-- 3
alter table students
add id integer primary key auto_increment;

-- 4
alter table students
modify column gender char(1);

-- 5
alter table students
change name firstname varchar(128);


select id, firstname
from students;














