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






--  //////    //     //////   // ///
--   //     // //   ///      ///
--   //    //////      ///  ////
--   //   //   //  //////  //  //





show tables;

drop table goods;

create table tester(
id integer primary key auto_increment,
firstname varchar(128) not null,
lastname varchar(128) not null,
subgect varchar(128) default 'will appear later',
start_time numeric(4,2) check(start_time <= 24.00),
finish_time numeric(4,2) check(finish_time <= 24.00),
mark integer check(mark between 0 and 12)
);

alter table tester
add teacher_name varchar(128);

alter table tester
drop column teacher_name;

drop table tester;
show tables;

insert into tester (firstname,lastname,subgect,start_time,finish_time,mark) values ('Anatolii','Chumak','Math',9.30,12.50,12),
																				('Lida','Petrova','Phisik',7.00,10.45,10),
																				('Vladislav','Nadtochei','Biology',7.00,12.45,11),
																				('Roman','Furdui','Math',18.00,23.00,8),
																				('Violetta','Chumak','Deutch',8.15,12.30,12),
																				('Anatolii','Onichenko','Biologi',10.00,15.00,8);
                                                                                
                                                                                
alter table tester
add class integer;

update tester
set class = 10;

update tester
set class = 11
where lastname in ('Chumak');

update tester
set class = 9 
where id = 3;

alter table tester
add mentor varchar(128);

alter table tester
modify column class varchar(128);

alter table tester
modify column class integer check(class between 0 and 12);

update tester
set class = 15;

alter table tester
drop check tester_chk_4;

update tester
set mark = 13
where id = 2;

alter table tester
modify column mark integer check(mark between 0 and 12); 

alter table tester 
change class classroom  varchar(128);

alter table tester 
modify column classroom integer check(classroom between 0 and 20);

update tester
set classroom = 19
where id =2;

select * from tester;



--  //////    //     //////   // ///       ///////
--   //     // //   ///      ///              ///
--   //    //////      ///  ////          ///
--   //   //   //  //////  //  //        ///////

show databases;

use TOLIKDATABASE;

show tables;

drop database TOLIKDATABASE;

create database task2;
use task2;


create table front(
	id integer primary key auto_increment,
    firstname varchar(128) not null,
    lastname varchar(128) not null,
    class integer check(class between 1 and 10),
    sub varchar(128) not null,
    mark integer check(mark between 0 and 5)
);


insert into front(firstname,lastname,class,sub,mark) value ('Albet','Enstain',10,'Phisick',1),
															('Fill','Richards',10,'marvel',2),
                                                            ('Rayan','GOsling',8,'actor',3),
                                                            ('Sem','Vinchester',8,'killer',0),
                                                            ('Din','Vinchester',7,'killer',0),
                                                            ('Harry','Potter',3,'visard',1),
                                                            ('Ron','Visley',3,'visard',2),
                                                            ('Hermiona','Granger',3,'witch',3),
                                                            ('Drako','Malfoy',1,'visard',0),
                                                            ('Albus','Dambledor',6,'derector',5),
                                                            ('Dobby','Elf',4,'clining',1);

update front
set mark = 4
where firstname like ('H%');


update front 
set mark = 0
where mark =1 and lastname like ('E%');

-- Удалить из таблицы студентов, у которых оценка 0
delete from front
where mark = 0;

-- Найти всех студентов, у которых оценка выше 3
select *
from front
where mark > 3;

-- Найти всех студентов, которые учатся в первом классе и у них оценка меньше 3
select *
from front
where class = 1 and mark > 3;

-- Удалить из таблицы этих студентов
delete from front
where class = 1 and mark > 3;

-- Найти всех студентов, у которых длина имени больше 4 букв
select *
from front
where firstname like ('%_____%');

--   Найти всех студентов, у которых фамилия начинается с буквы "a" и имеет длину не менее 3 символов. 
select *
from front
where lastname like ('V__%');

-- В таблице оставить тех студентов, которые (проходят Х предмет и оценка выше 4) и тех студентов (которые учатся 7-10 классах и у них оценки ниже 3).
delete from front
where (sub in ('killer') and mark > 4 ) or (class between 7 and 10 and mark < 3 );






select * from front;




/*
██      ███████ ███████ ███████  ██████  ███    ██     ██   ██ 
██      ██      ██      ██      ██    ██ ████   ██     ██   ██ 
██      █████   ███████ ███████ ██    ██ ██ ██  ██     ███████ 
██      ██           ██      ██ ██    ██ ██  ██ ██          ██ 
███████ ███████ ███████ ███████  ██████  ██   ████          ██ 
                                                               
                                                               
*/
-- ОБЪЕДИНЕНИЕ ТАБЛИЦ
-- UNION / UNION ALL - "вертикальное" объединение

-- Пример синтаксиса
select customer_id from customers
union all
select order_id from orders
union all
select shipping_id from shippings;


-- JOIN (INNER, LEFT, RIGHT) - "горизонтальное" объединение

-- пример из песочницы (https://www.programiz.com/sql/online-compiler/)
select
	t1.first_name,
    t1.last_name,
    t2.item,
    t3.status
from customers t1
inner join orders t2
on t1.customer_id = t2.customer_id
inner join shippings t3
on t2.customer_id = t3.customer;


-- /////////////////////////////////////////
-- /////////////////////////////////////////
-- /////////////////////////////////////////
-- /////////////////////////////////////////
-- /////////////////////////////////////////


use tasks;
show databases;
show tables;


select *
from students;

select *
from tester;

alter table students
drop check students_chk_1;

alter table students
modify column avg_mark numeric(3,1);

set sql_safe_updates = 0; 


update students
set avg_mark = avg_mark*10;




-- склеить колонки
select firstname as names from students
union
select firstname from tester;


update tester 
set firstname = 'Олег'
where id = 2;



delete from students
where id =6;

insert into students(firstname,lastname,avg_mark,gender) values ('Anatolii','Chumak',50.2,'M');


alter table students
drop check students_chk_1;

alter table students
change gender sex char(1);

update students
set sex = 'w'
where sex = 'f';

alter table students
modify column sex char(1) check(sex in('f','m'));




select *
from students;





/*
██████  ██████   █████   ██████ ████████ ██ ███████ ███████     ██████  
██   ██ ██   ██ ██   ██ ██         ██    ██ ██      ██               ██ 
██████  ██████  ███████ ██         ██    ██ ███████ █████        █████  
██      ██   ██ ██   ██ ██         ██    ██      ██ ██          ██      
██      ██   ██ ██   ██  ██████    ██    ██ ███████ ███████     ███████                                                             
*/

/*
1. Создать таблицу employees; 
employee_id целое число первичный ключ автоинкремент старт = 100, 
fname строка не null, 
last_name строка не null, 
email строка не null, 
phone строка не null 
*/


use tasks;

create table employe(
	employee_id integer primary key auto_increment,
    fname varchar(128) not null,
	last_name varchar(128) not null,
    email varchar(128) not null,
    phone varchar(128) not null 
)auto_increment = 100;


-- 2. Ой, забыли про зарплату)) Добавить поле salary numeric(9, 2), 

alter table employees
add salary numeric(9,2);

-- 3. Ойййй, нет, зарплата должна быть целым числом. Изменить тип salary на integer 

alter table employees
modify column salary integer;

-- 4. Переименовать поле name на first_name 

alter table employees
change fname first_name varchar(128);


-- 5. Удалить поле phone

alter table employees
drop phone;


-- 6. Добавить поле department

alter table employees
add department varchar(64) not null;

insert into employees(first_name, last_name, email, salary, department) values("Steven","King",	"SKING", 24000, "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Neena" , "Kochhar" , "NKOCHHAR" , 17000 , "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Lex" , "De Haan" , "LDEHAAN" , 17000 , "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Alexander" , "Hunold" , "AHUNOLD" , 9000 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Bruce" , "Ernst" , "BERNST" , 6000 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Valli" , "Pataballa" , "VPATABAL" , 4800 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Diana" , "Lorentz" , "DIANALO" , 8800 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Nancy" , "Greenberg" , "NGREENBE" , 12008 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Daniel" , "Faviet" , "DFAVIET" , 9000 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Jose Manuel" , "Urman" , "JMURMAN" , 7800 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Luis" , "Popp" , "LPOPP" , 6900 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Den" , "Raphaely" , "DRAPHEAL" , 11000 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Alexander" , "Khoo" , "AKHOO" , 3100 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Shelli" , "Baida" , "SBAIDA" , 2900 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Sigal" , "Tobias" , "STOBIAS" , 2800 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Matthew" , "Weiss" , "MWEISS" , 8000 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Fripp" , "AFRIPP" , 8200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Payam" , "Kaufling" , "PKAUFLIN" , 7900 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Shanta" , "Vollman" , "SVOLLMAN" , 6500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Kevin" , "Mourgos" , "KMOURGOS" , 5800 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Julia" , "Nayer" , "JNAYER" , 3200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Markle" , "SMARKLE" , 2200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Laura" , "Bissot" , "LBISSOT" , 3300 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Mozhe" , "Atkinson" , "MATKINSO" , 2800 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Joshua" , "Patel" , "JPATEL" , 2500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Trenna" , "Rajs" , "TRAJS" , 3500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("John" , "Russell" , "JRUSSEL" , 14000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Karen" , "Partners" , "KPARTNER" , 13500 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Alberto" , "Errazuriz" , "AERRAZUR" , 12000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Gerald" , "Cambrault" , "GCAMBRAU" , 11000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Eleni" , "Zlotkey" , "EZLOTKEY" , 10500 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Vargas" , "PVARGAS" , 2500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Laura" , "Errazuriz" , "AERRAZUR" , 12000 , "IT");






-- 8. Найти всех ИТ работников с зарплатой выше 12000 

select *
from employees
where salary > 12000;

-- 9. Повысить зарплату работников отдела Human Resources в 5 раз 


set sql_safe_updates = 0; 

update employees
set salary = salary*5
where department in ('Human Resources');

-- 10. Найти работников отдела Marketing с зарплатой ниже 2850. 

select *
from employees
where salary < 2850 and department = 'Marketing';

-- У руководителя родились близнецы Лаура и Адам, в честь праздника он решил повысить зарплату работников с именами Лаура и Адам в 10 раз. 

update employees
set salary = salary*10
where first_name in ('Laura','Adam');

-- Diana Lorentz вышла замуж и поменяла фамилию на King. Поменяйте у Diana Lorentz фамилию на King. 

update employees
set last_name = 'King'
where first_name = 'Diana' and  last_name = 'Lorentz';

-- 13. Всех работников отдела sales уволили. Удалите работников sales из таблицы. 

delete from employees
where department = 'Sales';


-- 14. John Russell перевели в отдел Marketing и повысили зарплату на 5000. Измените данные для работника John Russell. 


update employees
set salary = salary + 5000,
department = 'Marketing'
where first_name = 'John' and  last_name = 'Russell';


--  15. После праздника руководитель протрезвел и уменьшил зарплаты работников с именами Лаура и Адам в 10 раз.

update employees
set salary = salary/10
where first_name in ('Laura','Adam');


-- 16. Laura Bissot поменяла свой мейл на BISSOTLAURA. Измените данные для работника Laura Bissot.

update employees
set email = 'BISSOTLAURA'
where first_name = 'Laura' and  last_name = 'Bissot';


-- 17. Diana King развелась и поменяла фамилию обратно на Lorentz. И в честь развода руководитель повысил ее зарплату на 2000. Измените данные для работника Diana King. 

update employees
set last_name = 'Lorentz',
salary = salary + 2000
where first_name = 'Diana' and  last_name = 'King';




select *
from employees
where first_name = 'Diana' and  last_name = 'Lorentz';

select *
from employees;




/*
██      ███████ ███████ ███████  ██████  ███    ██     ███████ 
██      ██      ██      ██      ██    ██ ████   ██     ██      
██      █████   ███████ ███████ ██    ██ ██ ██  ██     ███████ 
██      ██           ██      ██ ██    ██ ██  ██ ██          ██ 
███████ ███████ ███████ ███████  ██████  ██   ████     ███████ 
                                                               
                                                               
*/



show tables;
-- https://github.com/NelliEfr/hr_data/blob/master/script.sql
-- 1. Вывести имя и фамилию сотрудника и название его департамента 

select 
	t1.first_name,
    t1.last_name,
    t2.department_name
from employees t1
left join departments t2
on t1.department_id = t2.department_id;

-- 2. Вывести имя и фамилию сотрудника и название его департамента только тех сотрудников, которые работают в IT, Treasury или IT Support 


select 
	t1.first_name,
    t1.last_name,
    t2.department_name
from employees t1
left join departments t2
on t1.department_id = t2.department_id
where t2.department_name in ('IT','Treasury','IT Support');

-- 3. Вывести названия департаментов, в которых никто не работает 

select 
    t1.department_name,
    t2.first_name,
    t2.last_name
from departments t1
left join employees t2
on t1.department_id = t2.department_id
where  t2.first_name is null;








select * from countries;
select * from departments;
select * from employees;
select * from jobs;
select * from locations;
select * from regions;

/*
██      ███████ ███████ ███████  ██████  ███    ██      ██████  
██      ██      ██      ██      ██    ██ ████   ██     ██       
██      █████   ███████ ███████ ██    ██ ██ ██  ██     ███████  
██      ██           ██      ██ ██    ██ ██  ██ ██     ██    ██ 
███████ ███████ ███████ ███████  ██████  ██   ████      ██████  
                                                                
                                                                
*/


show databases;
use uni;
show tables;

-- hw


select
t1.first_name,
t1.last_name,
t3.city
from employees t1
inner join departments t2
on t1.department_id = t2.department_id
inner join locations t3
on t2.location_id = t3.location_id
where t3.city in ('Seattle', 'Toronto'); 


-- 

select
t1.first_name as employee_firstname,
t1.last_name as employee_lest_name,
t2.first_name as manager_firstname,
t2.last_name as manager_lastname
from employees t1
inner join employees t2
on t1.manager_id = t2.employee_id; 



--

select 
t1.job_id
from employees t1
inner join employees t2
on t1.manager_id = t2.employee_id
where t1.salary > t1.salary; 


-- ПРАКТИЧЕСКАЯ РАБОТАalter


create database uni;
use uni;
set sql_safe_updates = 0;  -- выключает безопастный режим

/*1) создать таблицу Students
с полями:
- id целое число первичный ключ автоинкремент
- name строка 128 не null
- age целое число*/

create table students(
	id integer primary key auto_increment,
    name varchar(128) not null,
    age integer
);

/*2) создать таблицу Teachers
с полями:
- id целое число первичный ключ автоинкремент
- name строка 128 не null
- age целое число*/

create table teachers(
	id integer primary key auto_increment,
    name varchar(128) not null,
    age integer
);

/*3) создать таблицу Competencies
с полями:
- id целое число первичный ключ автоинкремент
- title строка 128 не null*/

create table competencies(
	id integer primary key auto_increment,
    title varchar(128) not null
);


/*4) создать таблицу Teachers2Competencies
с полями:
- id целое число первичный ключ автоинкремент
- teacher_id целое число
- competencies_id целое числоl*/

create table teachers2Competencies(
	id integer primary key auto_increment,
    teacher_id integer,
    competencies_id integer
);

/*
5) создать таблицу Courses
- id целое число первичный ключ автоинкремент
- teacher_id целое число
- title строка 128 не null
- headman_id целое число*/

create table courses(
	id integer primary key auto_increment,
    teacher_id integer,
    title varchar(128) not null,
    headman_id integer
);



/*
6) создать таблицу Students2Courses
- id целое число первичный ключ автоинкремент
- student_id целое число
- course_id целое число*/

create table students2Courses(
	id integer primary key auto_increment,
    student_id integer,
    course_id integer
);






--

insert into students(name,age) values('Anatolii', 29),
										('Oled', 25),
                                        ('Semen', 27),
                                        ('Olesia', 28),
                                        ('Olga', 31),
                                        ('Ivan', 22);
--
insert into teachers(name,age) values('Petr', 39),
									('Maksim', 35),
									('Anton', 37),
									('Vsevolod', 38),
									('Egor', 41),
									('Svetlana', 32);
--
insert into competencies(title) values('Математика'),
									('Информатика'),
									('Программирование'),
									('Графика');
--
insert into teachers2Competencies(teacher_id,competencies_id) values(1,1),
																	(2,1),
																	(2,3),
																	(3,2),
																	(4,1),
																	(5,3);
                                                                    
/*
Добавьте 5 записей в таблицу Courses

1 Алгебра логики 2
2 Математическая статистика 3
4 Высшая математика 5
5 Javascript 1
5 Базовый Python 1
*/
insert into courses(teacher_id,title,headman_id) values(1 ,'Алгебра логики', 2),
														(2, 'Математическая статистика', 3),
														(4, 'Высшая математика', 5),
														(5, 'Javascript', 1),
														(5, 'Базовый Python', 1);
                                                        
                                                        
/*
Добавьте 5 записей в таблицу students2courses

1 1
2 1
3 2
3 3
4 5
*/
insert into students2Courses(student_id,course_id) values(1,1),
															(2,1),
															(3,2),
															(3,3),
															(4,5);

show tables;

select * from students;
select * from teachers;
select * from competencies;
select * from teachers2Competencies;
select * from courses;
select * from students2Courses;



select 
	t1.name,
    t3.title
from students t1
inner join students2Courses t2
on t1.id = t2.student_id
inner join courses t3
on t2.course_id = t3.id;




-- ДЗ

-- 1
 
select
	t1.name,
	t3.title
from teachers t1
inner join teachers2Competencies t2
on t1.id = t2.teacher_id
inner join competencies t3
on t2.competencies_id = t3.id;

-- 2

select 
	t1.name,
    t2.competencies_id
from teachers t1
left join teachers2Competencies t2
on t1.id = t2.teacher_id
where t2.teacher_id is null;

-- 3

select
	t1.name,
    t2.course_id
from students t1
left join students2Courses t2
on t1.id = t2.student_id
where t2.course_id is null;

-- 4 

select
	t1.title,
    t2.course_id
from courses t1
left join students2Courses t2
on t1.id = t2.course_id
where t2.course_id is null;



/*
██      ███████ ███████ ███████  ██████  ███    ██     ███████ 
██      ██      ██      ██      ██    ██ ████   ██          ██ 
██      █████   ███████ ███████ ██    ██ ██ ██  ██         ██  
██      ██           ██      ██ ██    ██ ██  ██ ██        ██   
███████ ███████ ███████ ███████  ██████  ██   ████        ██
*/
-- 5. Найти компетенции, которых нет ни у одного преподавателя

select 
	t1.title
from competencies t1
left join teachers2Competencies t2
on t1.id = t2.competencies_id
where t2.competencies_id is null;

-- 6. Вывести название курса и имя старосты 

select 
	t1.title,
    t2.name
from courses t1
inner join students t2
on t1.headman_id = t2.id;

-- 7. Выведите имя студента и имена старост, которые есть на курсах, которые он проходит 

select
	t1.name,
    t3.title,
    t4.name as headmen
from students t1
inner join students2Courses t2
on t1.id = t2.student_id
inner join courses t3
on t2.course_id = t3.id
inner join students t4
on t3.headman_id = t4.id;







    

    


























