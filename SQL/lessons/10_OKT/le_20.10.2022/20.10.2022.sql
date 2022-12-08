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


/*
██████  ██████       ██     ██   ██     ██       ██  ██████      ██  ██    ██████   ██████  ██████  ██████  
██   ██ ██   ██     ██      ██   ██      ██     ███ ██          ███ ███         ██ ██  ████      ██      ██ 
██████  ██████      ██      ███████      ██      ██ ███████      ██  ██     █████  ██ ██ ██  █████   █████  
██      ██   ██     ██           ██      ██      ██ ██    ██     ██  ██    ██      ████  ██ ██      ██      
██      ██   ██      ██          ██     ██       ██  ██████  ██  ██  ██ ██ ███████  ██████  ███████ ███████                                                                    
*/

select * from oe.categories_tab;
select * from oe.customers;
select * from oe.orders;
select * from oe.order_items;
select * from oe.product_information;



-- 1. Вывести имя, фамилию пользователей и даты их заказов(order_date). 


select 
    t1.CUST_FIRST_NAME,
    t1.CUST_LAST_NAME,
    t2.ORDER_DATE
from oe.customers t1
inner join oe.orders t2
on t1.CUSTOMER_ID = t2.CUSTOMER_ID;


-- 2. Вывести даты заказов продуктов и описание этих продуктов(product_description). 


select 
    t1.ORDER_DATE,
    t3.PRODUCT_DESCRIPTION
from oe.orders t1
inner join oe.order_items t2
on t1.ORDER_ID = t2.ORDER_ID
inner join oe.product_information t3
on t2.PRODUCT_ID=t3.PRODUCT_ID;

-- 3. Вывести имя, фамилию пользователей, даты заказов(order_date), описание продуктов(product_description), которые они заказали и категории соответствующих продуктов (category_name).

select 
    cus.CUST_FIRST_NAME,
    cus.CUST_LAST_NAME,
    ord.ORDER_DATE,
    info.PRODUCT_DESCRIPTION,
    cat.CATEGORY_NAME
from oe.customers cus
inner join oe.orders ord
on cus.CUSTOMER_ID = ord.CUSTOMER_ID
inner join oe.order_items t2
on ord.order_ID = t2.order_ID
inner join oe.product_information info
on t2.PRODUCT_ID = info.PRODUCT_ID
inner join oe.categories_tab cat
on cat.CATEGORY_ID = info.CATEGORY_ID;


-- 4. Вывести названия(product_name), описания категорий(category_description) и количества(quantity) тех продуктов, у которых минимальная стоимость (min_price) больше 300. 
    
    
    
select 
    info.PRODUCT_NAME,
    cat.CATEGORY_DESCRIPTION,
    items.QUANTITY
from oe.product_information info
inner join oe.order_items items
on items.PRODUCT_ID = info.PRODUCT_ID
inner join oe.categories_tab cat
on cat.CATEGORY_ID = info.CATEGORY_ID
where info.MIN_PRICE > 300;

-- 5. Вывести имя, фамилию покупателей, которые купили принтеры. 
    
select
    cus.CUST_FIRST_NAME,
    cus.CUST_LAST_NAME,
    cat.CATEGORY_DESCRIPTION
from oe.customers cus
inner join oe.orders ord
on ord.CUSTOMER_ID = cus.CUSTOMER_ID
inner join oe.order_items items
on items.ORDER_ID = ord.ORDER_ID
inner join oe.product_information info
on info.PRODUCT_ID	= items.PRODUCT_ID	
inner join oe.categories_tab cat
on cat.CATEGORY_ID = info.CATEGORY_ID
where cat.CATEGORY_DESCRIPTION = 'printers';
    
    
    
		-- ДЗ
    
-- 6. Вывести имя, фамилию всех женатых мужчин покупателей, которые покупали продукты со стоимостью (list_price) больше 550.
-- 7. Вывести названия(product_name) тех продуктов, у которых стоимость больше, чем у продукта 'LaserPro 600/6/BW’. 




/*
██      ███████ ███████ ███████  ██████  ███    ██      █████  
██      ██      ██      ██      ██    ██ ████   ██     ██   ██ 
██      █████   ███████ ███████ ██    ██ ██ ██  ██      █████  
██      ██           ██      ██ ██    ██ ██  ██ ██     ██   ██ 
███████ ███████ ███████ ███████  ██████  ██   ████      █████  
*/


-- кол-во не null строк 
SELECT
count(*) as customers_count
FROM Customers;

-- max property of field
SELECT
	max(age) as max_age
FROM Customers;

-- min property of field
SELECT
	min(age) as min_age
FROM Customers;

-- сумма знач по полю
SELECT
	sum(age) as sum_age
FROM Customers;

-- среднее знач по полю
SELECT
	avg(age) as avg_age
FROM Customers;

-- ===================================

-- ===================================

-- ===================================


show databases;
use hr;
show tables;
set sql_safe_updates = 0;

-- 1. Найти самую высокую зарплату в компании 
select
	max(salary) as max_salary
from employees;
-- 2. Найти количество сотрудников в компании 
SELECT
count(*) as first_name_count
FROM employees;

-- 3. Найти количество сотрудников в каждом департаменте. Вывести поля department_id и employees_cnt 

SELECT
department_id,
count(*) as first_name_count
FROM employees
group by department_id;

-- 4. Найти количество сотрудников в каждом департаменте. Вывести поля department_name и employees_cnt 
SELECT
t1.first_name,
t1.department_id,
t2.department_name,
t2.location_id,
count(t1.first_name) as first_name_count
FROM employees t1
left join departments t2
on t1.department_id = t2.department_id
group by t2.department_name;


SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY','')); 


-- ДЗ

-- 1 
select 
	manager_id,
	count(employee_id) as employees_cnt
from employees
group by manager_id;

-- 2 
-- select 
-- 	manager_id,
-- 	count(employee_id) as employees_cnt,
--     first_name,
--     last_name
-- from employees
-- group by manager_id;-- 

select
	t1.manager_id,
	t2.first_name,
	t2.last_name,
	count(*) as employees_cnt
from employees t1
inner join employees t2
on t1.manager_id = t2.employee_id
group by t1.manager_id;
	
-- 3 
select 
	first_name,
    salary
from employees
where salary < (select avg(salary) from employees);
-- тренировка
select 
	first_name,
    salary
from employees
where salary >= (select salary from employees where first_name = 'Neena' and last_name = 'Kochhar');


/*
██      ███████ ███████ ███████  ██████  ███    ██      █████      ██████   ██████  ██████  ███████  █████  ██████  ██████   ██████  ███████ ██    ██ 
██      ██      ██      ██      ██    ██ ████   ██     ██   ██     ██   ██ ██    ██ ██   ██    ███  ██   ██ ██   ██ ██   ██ ██    ██ ██       ██  ██  
██      █████   ███████ ███████ ██    ██ ██ ██  ██      ██████     ██████  ██    ██ ██   ██   ███   ███████ ██████  ██████  ██    ██ ███████   ████   
██      ██           ██      ██ ██    ██ ██  ██ ██          ██     ██      ██    ██ ██   ██  ███    ██   ██ ██      ██   ██ ██    ██      ██    ██    
███████ ███████ ███████ ███████  ██████  ██   ████      █████      ██       ██████  ██████  ███████ ██   ██ ██      ██   ██  ██████  ███████    ██                                                                                                                                                    
*/


select 
	*
from employees
where salary < (select min(salary) from employees);


-- 1. Найти сотрудников, у которых наибольшая зарплата в их департаменте 


select 
	max(salary)
from employees
group by department_id;


select 
	t1.first_name,
    t1.salary,
    t2.max_salary
from employees t1
inner join (
		select 
			department_id,
			max(salary) as max_salary
		from employees
		group by department_id
		) as t2
on t1.department_id = t2.department_id
where t1.salary = t2.max_salary;





select 
	department_id,
	count(first_name)
from employees
group by department_id
having count(first_name) > 10;


select 
	t1.department_name,
    t1.department_id,
    t2.department_id as compare,
    t2.employees_cnt
from departments t1
	inner join (select 
		department_id,
		count(first_name) as employees_cnt
	from employees
	group by department_id
	having count(first_name) > 10) t2
on t1.department_id = t2.department_id;


select 
t1.department_name,
count(*) as count
from employees t2
inner join departments t1
on t1.department_id = t2.department_id
group by t1.department_name
having count > 10; 


--
select 
t1.department_name
from employees t2
inner join departments t1
on t1.department_id = t2.department_id
group by t1.department_name
having count(*) > 10; 

-- ---------

select
t1.department_name
from departments t1
inner join (
select
department_id
from employees
group by department_id
having count(*) > 10
) t2
on t1.department_id = t2.department_id; 



-- ДЗ:
-- 1. Вывести название отделов с кол-вом сотрудников больше среднего  /// колво сотрудников больше среднего 
-- 2. Найти департамент с наибольшим кол-вом сотрудников 



select 
	t1.department_name
from departments t1
inner join (select department_id,
					count(*) as ppd 
			from employees 
            group by department_id) t2
on t1.department_id = t2.department_id
where ppd > (select avg(ppd) from (select department_id,
					count(*) as ppd 
			from employees 
            group by department_id) t4);
            
            
            
-- HW 1
select 
	t1.department_name,
    count(*) as ppd
from departments t1
inner join employees t2
on t1.department_id = t2.department_id
group by t1.department_name
having ppd > (select avg(count) from (select count(*) as count from employees group by department_id) t3);

-- HW 2
select 
	t1.department_name,
    count(*) as ppd
from departments t1
inner join employees t2
on t1.department_id = t2.department_id
group by t1.department_name
having ppd = (select 
				max(count)
			from (select count(*) as count from employees group by department_id) t3);
/*
██████  ██████       ██  ██████       ██████   █████  ██ ██   ██ 
██   ██ ██   ██     ███ ██  ████     ██       ██   ██ ██ ██  ██  
██████  ██████       ██ ██ ██ ██     ██   ███ ███████ ██ █████   
██      ██   ██      ██ ████  ██     ██    ██ ██   ██ ██ ██  ██  
██      ██   ██      ██  ██████       ██████  ██   ██ ██ ██   ██ 
*/
            
            
use hr;

-- 1) найти максимальную зарплату сотрудников 

select 
	max(salary)
from employees;

-- 2) найти сотрудников, у которых зарплата больше средней 

select
	first_name,
    salary
from employees
where salary > (select avg(salary) from employees);

-- 3) найти кол-во сотрудников в каждом департаменте. В результатае выведите id департамента и кол-во сотрудников 

select 
	department_id,
    count(employee_id)
from employees
group by department_id;

-- ДЗ Вывести название отделов с кол-вом сотрудников больше среднего 

-- move 1

select 
	department_id,
    count(employee_id) as ppd
from employees
where department_id is not null
group by department_id;


-- move 2 
select
	avg(ppd)
from (select 
		count(*) as ppd
	from employees
	where department_id is not null
	group by department_id) t1;
    
-- move 3
select 
	t1.department_name
from departments t1
inner join employees t2
on t1.department_id = t2.department_id
group by t1.department_name
having count(*) > (select 
				avg(count) 
			from (select 
						count(*) as count 
				from employees 
                where department_id is not null
				group by department_id) t3);
                
                
                
select 
	t2.department_name,
	t3.cnt
from departments t2
inner join (
select
department_id,
count(*) as cnt
from employees
where department_id is not null
group by department_id
having count(*) > (
select 
avg(cnt) 
from (
select
count(*) as cnt
from employees
where department_id is not null
group by department_id
) t1
)
) t3
on t2.department_id = t3.department_id; 


select 
	department_name
from departments
where department_id in (
	select
		department_id
	from employees
	where department_id is not null
	group by department_id
	having count(*) > (
		select 
		avg(cnt) 
		from (
			select
				count(*) as cnt
			from employees
			where department_id is not null
			group by department_id
			) t1)); 



/*
██      ███████ ███████ ███████  ██████  ███    ██      ██  ██████       █████   ██████  ██████  ███████  ██████   █████  ████████ ██  ██████  ███    ██ 
██      ██      ██      ██      ██    ██ ████   ██     ███ ██  ████     ██   ██ ██       ██   ██ ██      ██       ██   ██    ██    ██ ██    ██ ████   ██ 
██      █████   ███████ ███████ ██    ██ ██ ██  ██      ██ ██ ██ ██     ███████ ██   ███ ██████  █████   ██   ███ ███████    ██    ██ ██    ██ ██ ██  ██ 
██      ██           ██      ██ ██    ██ ██  ██ ██      ██ ████  ██     ██   ██ ██    ██ ██   ██ ██      ██    ██ ██   ██    ██    ██ ██    ██ ██  ██ ██ 
███████ ███████ ███████ ███████  ██████  ██   ████      ██  ██████      ██   ██  ██████  ██   ██ ███████  ██████  ██   ██    ██    ██  ██████  ██   ████ 
*/



-- Решаем задачи из песочници https://www.programiz.com/sql/online-compiler/

-- Найти имена и фамилии покупателей, чей возраст равен максимальному 
select 
	first_name,
    last_name
from Customers 
where age = (select max(age) from Customers);

-- Найти имена и фамилии покупателей, чей возраст равен максимальному 
select 
	item,
 sum(amount)
from Orders
group by item;

-- Найти средний чек (amount) у каждого покупателя. Вывести имя, фамилию покупателя и средний чек
select 
	t1.first_name,
    t1.last_name,
    t2.avg_sum
from Customers t1
inner join (select
	customer_id,
	avg(amount) as avg_sum
from Orders
group by customer_id) t2
on t2.customer_id = t1.customer_id;
    

-- ДЗ в песочнице
-- 1. Средний возраст покупателей из UK
-- 2. Средний возраст покупателей из UK и USA (в разбивке по странам)
-- 3. Найти страны, в которых средний возраст покупателей больше или равен 25
-- 4. Найти тех покупателей, у которых средний amount больше или равен 400. Вывести имя, фамилию покупателя и средний amount 




/*
 █████  ██ ██████  ██████   ██████  ██████  ████████     ██           ██  ██ 
██   ██ ██ ██   ██ ██   ██ ██    ██ ██   ██    ██        ██          ███ ███ 
███████ ██ ██████  ██████  ██    ██ ██████     ██        ██           ██  ██ 
██   ██ ██ ██   ██ ██      ██    ██ ██   ██    ██        ██           ██  ██ 
██   ██ ██ ██   ██ ██       ██████  ██   ██    ██        ███████      ██  ██ 
                                                                             
                                                                             
*/

create database airport;
use airport;

drop database airport;

CREATE TABLE airliners (
	id VARCHAR(128) PRIMARY KEY,
	model_name VARCHAR(128),
	range_ INTEGER,
	production_year INTEGER,
	color VARCHAR(128),
	side_number VARCHAR(128),
	country VARCHAR(128)
);

CREATE TABLE trips (
	id VARCHAR(128) PRIMARY KEY,
	trip_code VARCHAR(128),
	departure VARCHAR(128),
	arrival VARCHAR(128),
	status VARCHAR(128),
	airliner_id VARCHAR(128)
);

CREATE TABLE clients (
	id VARCHAR(128) PRIMARY KEY,
	name VARCHAR(128),
	phone VARCHAR(128),
	age INTEGER
);

CREATE TABLE tickets (
	id VARCHAR(128) PRIMARY KEY,
	trip_id VARCHAR(128),
	service_class VARCHAR(128),
	price INTEGER,
	client_id VARCHAR(128)
);

INSERT INTO airliners VALUES ('00095579', 'Airbus A320-200', 12800, 2016, 'white', '7729', 'Russia');
INSERT INTO airliners VALUES ('00434546', 'Boeing 777-300', 9600, 2008, 'brown', '5693', 'Russia');
INSERT INTO airliners VALUES ('00913835', 'Airbus A320-200', 14200, 2000, 'white', '3919', 'Germany');
INSERT INTO airliners VALUES ('00243371', 'Airbus A320-200', 10100, 2005, 'white', '562', 'Russia');
INSERT INTO airliners VALUES ('00073581', 'Boeing 777-300', 13700, 2018, 'white', '3267', 'Russia');
INSERT INTO airliners VALUES ('00837897', 'Sukhoi Superjet-100', 2800, 2013, 'white', '869', 'Russia');
INSERT INTO airliners VALUES ('00108551', 'Airbus A320-200', 13900, 2017, 'white', '6022', 'Russia');
INSERT INTO airliners VALUES ('00473503', 'Airbus A321-200', 10900, 2012, 'white', '8474', 'France');
INSERT INTO airliners VALUES ('00871029', 'Boeing 777-300', 12700, 2002, 'white', '4070', 'Germany');
INSERT INTO airliners VALUES ('00974590', 'Boeing 777-300', 13200, 2005, 'white', '488', 'Germany');
INSERT INTO airliners VALUES ('00461862', 'Airbus A321-200', 12800, 2020, 'white', '6039', 'France');
INSERT INTO airliners VALUES ('00603813', 'Boeing 777-300', 11700, 2017, 'white', '6001', 'Russia');
INSERT INTO airliners VALUES ('00619341', 'Airbus A321-200', 10600, 2008, 'white', '7561', 'Russia');
INSERT INTO airliners VALUES ('00305881', 'Boeing 777-300', 12300, 2005, 'green', '1426', 'Russia');
INSERT INTO airliners VALUES ('00045877', 'Airbus A321-200', 13800, 1998, 'white', '3879', 'Russia');
INSERT INTO airliners VALUES ('00569299', 'Cessna 172', 1200, 1978, 'white', '8306', 'Russia');


INSERT INTO trips VALUES ('AZLXFEICN9', 'FYKUZEYK', 'RZN', 'PBX', 'Departed', '00073581');
INSERT INTO trips VALUES ('NXL5LGFPDZ', 'FYELLIVY', 'KEJ', 'PYJ', 'Departed', '00045877');
INSERT INTO trips VALUES ('YBCCGNT4FB', 'FYDLCIYR', 'MRV', 'ABA', 'Departed', '00305881');
INSERT INTO trips VALUES ('JKRUCXH7VM', 'FYBFSQHC', 'KJA', 'MQF', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('54GNK8KX0J', 'FYJBLFJF', 'NAL', 'IAR', 'Delayed', '00913835');
INSERT INTO trips VALUES ('YRDP58VH7Z', 'FYQUGTHS', 'LED', 'AAQ', 'Arrived', '00974590');
INSERT INTO trips VALUES ('QQZ8OIWT0I', 'FYBTHJNF', 'SVX', 'PKV', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('1OOOROHFT5', 'FYSIVZCT', 'KYZ', 'NYM', 'Scheduled', '00461862');
INSERT INTO trips VALUES ('Z7I9LOO53W', 'FYXKFNBK', 'IJK', 'KSZ', 'Delayed', '00473503');
INSERT INTO trips VALUES ('BKSVI3TXU0', 'FYNOHGPA', 'BZK', 'NOZ', 'Scheduled', '00837897');
INSERT INTO trips VALUES ('NRE4AOEN0U', 'FYUOENIB', 'RVH', 'DME', 'Arrived', '00473503');
INSERT INTO trips VALUES ('RL6EC4YWB1', 'FYYPDVXX', 'CNN', 'OSW', 'Departed ', '00837897');
INSERT INTO trips VALUES ('P1KMGIH0LB', 'FYQGVPDV', 'PES', 'NSK', 'Departed', '00913835');
INSERT INTO trips VALUES ('DTN6F9SMFY', 'FYIZFTNS', 'MJZ', 'NNM', 'Arrived', '00619341');
INSERT INTO trips VALUES ('I7OL2KZUTM', 'FYENZBWZ', 'KRR', 'PEE', 'Departed', '00619341');
INSERT INTO trips VALUES ('0SE4S0HRRU', 'FYDKIBWN', 'TOX', 'KHV', 'Departed', '00045877');
INSERT INTO trips VALUES ('5I5WU71AWR', 'FYYRTAUP', 'MQF', 'CYX', 'Departed', '00073581');
INSERT INTO trips VALUES ('FIE30ZUHAU', 'FYXQGDKJ', 'NNM', 'MOW', 'Arrived', '00108551');
INSERT INTO trips VALUES ('8RF8OIOVFR', 'FYIHSLAA', 'ABA', 'SCW', 'Delayed', '00434546');
INSERT INTO trips VALUES ('JYYNPD5Q54', 'FYWTXNZF', 'STW', 'KHV', 'Cancelled', '00461862');
INSERT INTO trips VALUES ('A71MZN54ZP', 'FYRGWMOU', 'TOF', 'KZN', 'Departed', '00045877');
INSERT INTO trips VALUES ('DFCFUPV4XB', 'FYCSRAVD', 'AER', 'CSY', 'Departed', '00095579');
INSERT INTO trips VALUES ('HCX33V5QUH', 'FYBHJBFQ', 'NNM', 'KRO', 'Departed', '00045877');
INSERT INTO trips VALUES ('DAA22Y84O7', 'FYVJYQLI', 'ABA', 'KVX', 'Departed', '00619341');
INSERT INTO trips VALUES ('30N25AXHAF', 'FYJLHCLF', 'IJK', 'CYX', 'Cancelled', '00473503');
INSERT INTO trips VALUES ('CNIKNNGF4Z', 'FYUTQQYR', 'DME', 'MMK', 'Departed', '00108551');
INSERT INTO trips VALUES ('HC0MJ162ZZ', 'FYHVSSGY', 'OMS', 'RZN', 'Arrived', '00108551');
INSERT INTO trips VALUES ('SFQ20OEYVR', 'FYKRPIYG', 'ARH', 'IKS', 'Scheduled', '00871029');
INSERT INTO trips VALUES ('VR5SF5YIWN', 'FYCZRFLM', 'ESL', 'GOJ', 'Scheduled', '00461862');
INSERT INTO trips VALUES ('X6FN294I1K', 'FYXLIUNH', 'RTW', 'EGO', 'Scheduled', '00913835');
INSERT INTO trips VALUES ('J3B1J090J0', 'FYGQHJFE', 'BCX', 'KYZ', 'Scheduled', '00434546');
INSERT INTO trips VALUES ('87RVI5T7A2', 'FYMKPDZC', 'OSW', 'STW', 'Arrived', '00603813');
INSERT INTO trips VALUES ('1CZRH40E2L', 'FYIJUHTL', 'MMK', 'MOW', 'Arrived', '00108551');
INSERT INTO trips VALUES ('MMI79V757K', 'FYTORWPK', 'KSZ', 'KLD', 'Arrived', '00108551');
INSERT INTO trips VALUES ('5480GD0GIS', 'FYVXEQJW', 'SVO', 'SVX', 'Departed', '00095579');
INSERT INTO trips VALUES ('Z3BPB534TR', 'FYLQYHXY', 'KHV', 'PKC', 'Arrived', '00619341');
INSERT INTO trips VALUES ('B5L8IUXI1O', 'FYRHRAHE', 'NAL', 'OGZ', 'Departed', '00913835');
INSERT INTO trips VALUES ('OZAO28DLFP', 'FYWTYJDC', 'PKV', 'MQF', 'Scheduled', '00837897');
INSERT INTO trips VALUES ('XOY8HZ1LQ5', 'FYZFNFDC', 'ESL', 'CSY', 'Delayed', '00461862');
INSERT INTO trips VALUES ('CG5B2D3KLA', 'FYAOCJJX', 'MJZ', 'UUS', 'Arrived', '00871029');
INSERT INTO trips VALUES ('5QMWLJ4SOC', 'FYDKXSYX', 'PEE', 'KZN', 'Departed ', '00603813');
INSERT INTO trips VALUES ('8C9GNO8RBM', 'FYSLJUYP', 'PKV', 'BKA', 'Arrived', '00305881');
INSERT INTO trips VALUES ('ZK9M965C68', 'FYXMFCQT', 'BZK', 'CEK', 'Scheduled', '00913835');
INSERT INTO trips VALUES ('2NMMGC6EYC', 'FYCHPOHX', 'CEE', 'CKH', 'Arrived', '00974590');
INSERT INTO trips VALUES ('BODSSG3E82', 'FYEEVFKF', 'KSZ', 'ROV', 'Cancelled', '00871029');
INSERT INTO trips VALUES ('01BWVNX5Y6', 'FYMBJISR', 'UCT', 'AAQ', 'Arrived', '00473503');
INSERT INTO trips VALUES ('1KIUNIRKJ0', 'FYAHGFMW', 'MCX', 'CNN', 'Departed', '00913835');
INSERT INTO trips VALUES ('2O2OOCWMHY', 'FYJJSDGL', 'PVS', 'ROV', 'Arrived', '00243371');
INSERT INTO trips VALUES ('LF1XAF7P9E', 'FYDPMJUK', 'DKS', 'PYJ', 'Departed', '00243371');
INSERT INTO trips VALUES ('WIHYUQL6L4', 'FYKNDOIE', 'BKA', 'ADH', 'Arrived', '00974590');
INSERT INTO trips VALUES ('PNKMZ4CY53', 'FYWAAXAX', 'PKV', 'TOF', 'Scheduled', '00045877');
INSERT INTO trips VALUES ('4QST269XS7', 'FYSVZVTC', 'PKC', 'DME', 'Arrived', '00108551');
INSERT INTO trips VALUES ('48AEBYYWRF', 'FYGOFGGS', 'AMV', 'OGZ', 'Arrived', '00073581');
INSERT INTO trips VALUES ('VCKEGVKWW8', 'FYMQHLLW', 'NUX', 'GOJ', 'Scheduled', '00473503');
INSERT INTO trips VALUES ('FN2S30I60G', 'FYWFBJPL', 'IKS', 'UUD', 'Scheduled', '00434546');
INSERT INTO trips VALUES ('WEY6B7TDE6', 'FYXYBKXK', 'PYJ', 'TOF', 'Arrived', '00243371');
INSERT INTO trips VALUES ('LL4S1G8PQW', 'FYPKNBGN', 'RTW', 'DYR', 'Arrived', '00871029');
INSERT INTO trips VALUES ('JBI60Q2MGP', 'FYSZADHR', 'DME', 'KVX', 'Arrived', '00913835');
INSERT INTO trips VALUES ('7D8SWXQ48V', 'FYYYFUIT', 'NAL', 'NUX', 'Scheduled', '00305881');
INSERT INTO trips VALUES ('DZCBMKI9BU', 'FYGBZBCQ', 'DME', 'NAL', 'Departed', '00603813');
INSERT INTO trips VALUES ('3AML9EO1ZU', 'FYWSRRLT', 'RVH', 'DME', 'Arrived', '00837897');
INSERT INTO trips VALUES ('529DVPG56R', 'FYRJNVDV', 'BCX', 'HTA', 'Arrived', '00913835');
INSERT INTO trips VALUES ('D1VLWQT9GD', 'FYDXJSJR', 'VKO', 'NSK', 'Delayed', '00045877');
INSERT INTO trips VALUES ('8GX4Z63QKE', 'FYLTSDSB', 'KUF', 'PBX', 'Scheduled', '00974590');
INSERT INTO trips VALUES ('3WU3U5YSRV', 'FYBDTVEX', 'CEK', 'KSZ', 'Cancelled', '00974590');
INSERT INTO trips VALUES ('3ZAQ90KNLJ', 'FYUKAZNV', 'HTA', 'KHV', 'Scheduled', '00073581');
INSERT INTO trips VALUES ('Z1ZBYY6OL3', 'FYVADNYC', 'KRO', 'SGC', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('7AYT1ZEL9L', 'FYTSDYQF', 'ACS', 'STW', 'Arrived', '00461862');
INSERT INTO trips VALUES ('MNSKOUBKF9', 'FYECNFGA', 'KHV', 'SVX', 'Arrived', '00108551');
INSERT INTO trips VALUES ('5X1DUI7MXZ', 'FYUGYNWQ', 'BCX', 'RTW', 'Departed', '00473503');
INSERT INTO trips VALUES ('NNNU1G3P7E', 'FYNDDJVU', 'DYR', 'SCW', 'Departed', '00243371');
INSERT INTO trips VALUES ('18DMF6OGN9', 'FYLAZXFB', 'VKT', 'VKO', 'Departed', '00619341');
INSERT INTO trips VALUES ('XYXL53SCQK', 'FYHTHJSQ', 'SGC', 'KGP', 'Delayed', '00461862');
INSERT INTO trips VALUES ('UT37FSBM4O', 'FYMONFVU', 'KEJ', 'PYJ', 'Arrived', '00305881');
INSERT INTO trips VALUES ('6FN3ZKYEVY', 'FYWGBVVX', 'IKS', 'NOZ', 'Scheduled', '00095579');
INSERT INTO trips VALUES ('H27PNTQH4K', 'FYLVNAEX', 'NSK', 'RZN', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('M8L4LI30P2', 'FYBHJCIQ', 'PYJ', 'SGC', 'Arrived', '00305881');
INSERT INTO trips VALUES ('QZV6ZMWWTB', 'FYFKGDGH', 'NSK', 'MMK', 'Cancelled', '00305881');
INSERT INTO trips VALUES ('RQUAPVXU7I', 'FYTLTEYC', 'RTW', 'UUS', 'Scheduled', '00473503');
INSERT INTO trips VALUES ('TRBF4TTDIU', 'FYTQYCMA', 'DME', 'LED', 'Delayed', '00974590');
INSERT INTO trips VALUES ('FL98ACKIH1', 'FYNYHKCT', 'DME', 'VKT', 'Arrived', '00603813');
INSERT INTO trips VALUES ('MSHHF6KLJT', 'FYFKRKVJ', 'TJM', 'KSZ', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('JQF04Q8I9G', 'FYIZWBNV', 'PEZ', 'ROV', 'Arrived', '00073581');
INSERT INTO trips VALUES ('DQJN8Z0910', 'FYJKLZLE', 'NSK', 'CSY', 'Arrived', '00913835');
INSERT INTO trips VALUES ('NWVY6OMNG7', 'FYCLQKGI', 'UCT', 'PEZ', 'Arrived', '00837897');
INSERT INTO trips VALUES ('YJW1ZNCFBS', 'FYZFBTDO', 'KEJ', 'BTK', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('HXCMRFOB6P', 'FYVYYQRC', 'DKS', 'BTK', 'Scheduled', '00871029');
INSERT INTO trips VALUES ('3XE7G7OE4P', 'FYNELFIN', 'UUD', 'NSK', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('8N2KAM9DEC', 'FYSPDVSV', 'ACS', 'IJK', 'Departed', '00603813');
INSERT INTO trips VALUES ('41BVLBDKOH', 'FYYCTKNY', 'KUF', 'EGO', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('35OHWYY8IU', 'FYBVATBF', 'BWO', 'ROV', 'Scheduled', '00619341');
INSERT INTO trips VALUES ('YOH0RM9VQF', 'FYXURBHU', 'ACS', 'OSW', 'Scheduled', '00045877');
INSERT INTO trips VALUES ('YCXO645BFL', 'FYSLXGSG', 'VKO', 'DME', 'Arrived', '00073581');
INSERT INTO trips VALUES ('8ZTSNCGKI5', 'FYOSOJBM', 'BQS', 'MOW', 'Arrived', '00305881');
INSERT INTO trips VALUES ('YPKNDOQ55S', 'FYTSBUNH', 'MQF', 'KYZ', 'Scheduled', '00603813');
INSERT INTO trips VALUES ('VTHTJMYTT0', 'FYCJUWEV', 'UUS', 'AMV', 'Arrived', '00073581');
INSERT INTO trips VALUES ('THCLB4OOC0', 'FYGZIAIP', 'UFA', 'RZN', 'Departed', '00913835');
INSERT INTO trips VALUES ('29RXLVJHVJ', 'FYBSRELS', 'PVS', 'KSZ', 'Departed', '00095579');
INSERT INTO trips VALUES ('N7SRZUAXMM', 'FYVXIVHZ', 'KZN', 'DME', 'Arrived', '00243371');
INSERT INTO trips VALUES ('QMWW87WUE2', 'FYJUOLRJ', 'OVB', 'GDX', 'Departed', '00073581');


INSERT INTO clients VALUES ('LGEBN53X8I1Y', 'Ivan Egorov', '+75544461673', 40);
INSERT INTO clients VALUES ('4NRRAHARBISL', 'Vyacheslav Petrov', '+78774794727', 57);
INSERT INTO clients VALUES ('HKPSZUJQDQVG', 'Victor Volkov', '+72630859116', 21);
INSERT INTO clients VALUES ('M8TLNY8O5UYZ', 'Tatiana Pavlova', '+70265999830', 52);
INSERT INTO clients VALUES ('O0R58CGGIQJD', 'Elizaveta Egorova', '+70124100898', 65);
INSERT INTO clients VALUES ('BSR85GQFNRCB', 'Anna Morozova', '+75198645540', 62);
INSERT INTO clients VALUES ('QO75HHT3YFCV', 'Aleksandra Stepanova', '+78112187274', 71);
INSERT INTO clients VALUES ('L66RT0W5VKCO', 'Ludmila Ivanova', '+77190012242', 41);
INSERT INTO clients VALUES ('3EA2CXG3P3VW', 'Aleksandr Nikolaev', '+71333997867', 36);
INSERT INTO clients VALUES ('4CBL1CSSHTOZ', 'Dmitry Petrov', '+76684550143', 74);
INSERT INTO clients VALUES ('A1FDG6PIV84W', 'Denis Stepanov', '+77140700202', 26);
INSERT INTO clients VALUES ('MAFROHBKRFOF', 'Maria Egorova', '+75763445454', 54);
INSERT INTO clients VALUES ('P4TMWQHK4BPV', 'Angelina Petrova', '+74505025239', 50);
INSERT INTO clients VALUES ('41375QMWKX55', 'Nadezhda Popova', '+72774899565', 74);
INSERT INTO clients VALUES ('6DM0TK59KMP9', 'Boris Sokolov', '+73451751747', 36);
INSERT INTO clients VALUES ('YXBLICL96GXL', 'Nadezhda Ivanova', '+77287237553', 35);
INSERT INTO clients VALUES ('4A9FUE95UMTR', 'Daria Novikova', '+79043659102', 54);
INSERT INTO clients VALUES ('HYS9XO5IUI4K', 'Daria Volkova', '+72900278935', 70);
INSERT INTO clients VALUES ('ZZIA7AEYNC8A', 'Maria Fedorova', '+78932431470', 28);
INSERT INTO clients VALUES ('9EQ0DBEU761J', 'Tatiana Volkova', '+70867367875', 70);


INSERT INTO tickets VALUES ('UE01H8UCJQ8O', 'RL6EC4YWB1', 'Economy', 18280, 'LGEBN53X8I1Y');
INSERT INTO tickets VALUES ('WCADJ8UOTCWD', 'LL4S1G8PQW', 'Economy', 40530, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('MXFLZA9PHHWI', 'JQF04Q8I9G', 'Economy', 9050, '41375QMWKX55');
INSERT INTO tickets VALUES ('WU6KOQZTRH3E', '7D8SWXQ48V', 'Economy', 13330, '3EA2CXG3P3VW');
INSERT INTO tickets VALUES ('OQ83AMHE59DM', '8RF8OIOVFR', 'FirstClass', 257460, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('NKFQ4RNLXYEC', '5QMWLJ4SOC', 'PremiumEconomy', 55550, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('3T9S9R8CRDVY', '8RF8OIOVFR', 'Economy', 25330, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('GSIGUCHIESDF', '87RVI5T7A2', 'Economy', 33750, 'L66RT0W5VKCO');
INSERT INTO tickets VALUES ('2YOI2PSODQL3', 'WEY6B7TDE6', 'PremiumEconomy', 22390, '6DM0TK59KMP9');
INSERT INTO tickets VALUES ('JWSMMHW2XMAB', '87RVI5T7A2', 'Economy', 34420, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('TQBQR0IMN32H', '3ZAQ90KNLJ', 'PremiumEconomy', 31340, 'HKPSZUJQDQVG');
INSERT INTO tickets VALUES ('8NSZ3Y13W04A', 'OZAO28DLFP', 'Economy', 10450, 'BSR85GQFNRCB');
INSERT INTO tickets VALUES ('ZA39AID06OZN', 'XOY8HZ1LQ5', 'FirstClass', 437660, 'O0R58CGGIQJD');
INSERT INTO tickets VALUES ('WVXFO0DFSW73', 'H27PNTQH4K', 'Economy', 23370, 'QO75HHT3YFCV');
INSERT INTO tickets VALUES ('ZCQ7UFXD2I3K', 'HC0MJ162ZZ', 'Economy', 41920, 'HKPSZUJQDQVG');
INSERT INTO tickets VALUES ('H4GNE6O3CJ82', '3XE7G7OE4P', 'Economy', 18940, 'YXBLICL96GXL');
INSERT INTO tickets VALUES ('E5TKAEGCMZ7W', '35OHWYY8IU', 'PremiumEconomy', 53580, '6DM0TK59KMP9');
INSERT INTO tickets VALUES ('3DGXUL6T9E8B', 'Z3BPB534TR', 'Economy', 14170, 'P4TMWQHK4BPV');
INSERT INTO tickets VALUES ('702ADQNIS69Z', '87RVI5T7A2', 'Economy', 23170, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('IR71NM41MRLM', 'B5L8IUXI1O', 'Economy', 36120, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('ZLN3ZYL2E7UD', 'LL4S1G8PQW', 'PremiumEconomy', 78240, '4CBL1CSSHTOZ');
INSERT INTO tickets VALUES ('JJZ1LAYOR40K', 'NWVY6OMNG7', 'Economy', 30380, '4A9FUE95UMTR');
INSERT INTO tickets VALUES ('02L9TNINKTTY', 'BODSSG3E82', 'PremiumEconomy', 57370, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('5RJ9VEVLTIRR', 'P1KMGIH0LB', 'PremiumEconomy', 33820, 'QO75HHT3YFCV');
INSERT INTO tickets VALUES ('TVEHF8S5D1KL', '41BVLBDKOH', 'Economy', 32380, '41375QMWKX55');
INSERT INTO tickets VALUES ('18IWPW434XAU', 'JQF04Q8I9G', 'Economy', 22490, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('PQQH44EIOUNQ', 'UT37FSBM4O', 'Business', 149810, '9EQ0DBEU761J');
INSERT INTO tickets VALUES ('WNO7QWHNQ1X6', 'DFCFUPV4XB', 'FirstClass', 280240, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('PO3F39IYONF4', 'I7OL2KZUTM', 'Economy', 36080, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('MZH0D5052IEQ', '29RXLVJHVJ', 'Economy', 24200, '4NRRAHARBISL');
INSERT INTO tickets VALUES ('8NN75L120I5Q', 'ZK9M965C68', 'PremiumEconomy', 68630, 'ZZIA7AEYNC8A');
INSERT INTO tickets VALUES ('HCCVSTRLNGJV', '1OOOROHFT5', 'Economy', 26290, 'YXBLICL96GXL');
INSERT INTO tickets VALUES ('86274XSOSNJ6', 'OZAO28DLFP', 'Economy', 39470, '9EQ0DBEU761J');
INSERT INTO tickets VALUES ('9Y93S7E4Q145', 'DTN6F9SMFY', 'Economy', 46400, 'O0R58CGGIQJD');
INSERT INTO tickets VALUES ('B7BH71HM23J7', 'WEY6B7TDE6', 'Economy', 6950, 'L66RT0W5VKCO');
INSERT INTO tickets VALUES ('OCNIND8J6YD7', '6FN3ZKYEVY', 'Economy', 46870, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('A6LRS128V10I', 'YRDP58VH7Z', 'Economy', 19400, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('CXSABAOA2CS2', 'WIHYUQL6L4', 'Economy', 18470, 'ZZIA7AEYNC8A');
INSERT INTO tickets VALUES ('Z2VWROS7T4IR', 'OZAO28DLFP', 'Economy', 9610, 'A1FDG6PIV84W');
INSERT INTO tickets VALUES ('7P4K971958IX', 'WEY6B7TDE6', 'Economy', 7590, 'HKPSZUJQDQVG');
INSERT INTO tickets VALUES ('VR9P4MQ6HJ8M', 'I7OL2KZUTM', 'Economy', 45730, 'L66RT0W5VKCO');
INSERT INTO tickets VALUES ('VJT08F5YKP7D', '87RVI5T7A2', 'Economy', 17500, '6DM0TK59KMP9');
INSERT INTO tickets VALUES ('ID17JOA1HZJL', 'DAA22Y84O7', 'Economy', 39850, 'QO75HHT3YFCV');
INSERT INTO tickets VALUES ('AA0MZV3QASIE', 'VR5SF5YIWN', 'Economy', 35860, 'MAFROHBKRFOF');
INSERT INTO tickets VALUES ('8UVQROLPPF2E', '01BWVNX5Y6', 'PremiumEconomy', 48900, '4CBL1CSSHTOZ');
INSERT INTO tickets VALUES ('UDE15B2QXYR5', 'DZCBMKI9BU', 'Economy', 47900, 'YXBLICL96GXL');
INSERT INTO tickets VALUES ('05XGD0C3SD0A', '41BVLBDKOH', 'Economy', 46310, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('3Z45EW0ESQSR', '0SE4S0HRRU', 'Business', 92310, 'HYS9XO5IUI4K');
INSERT INTO tickets VALUES ('2OUQ2N9GNF4A', 'DAA22Y84O7', 'Economy', 48760, 'BSR85GQFNRCB');
INSERT INTO tickets VALUES ('WI1OKUNNVU6D', 'VCKEGVKWW8', 'Economy', 47110, '4NRRAHARBISL');



-- 1. Выведите коды всех рейсов, в рамках которых воздушные судна вылетели из Москвы и в данный момент находятся в воздухе (статус таких рейсов — departed). 
-- Коды аэропортов Москвы: SVO, VKO, DME.
-- В выборке должен присутствовать один атрибут — trip_code. 

select
	trip_code
from trips
where status = 'Departed' and departure in ('SVO','VKO','DME')


-- 2. Выведите бортовые номера (side_number) и дальность полета (range_) всех ближне- и дальнемагистральных самолетов.
-- Примечание: ближнемагистральными считайте те, дальность полета которых > 1000 км и <= 2500 км.
-- Дальнемагистральными — с дальностью полета >= 6000 км.
-- В выборке должны присутствовать два атрибута — side_number и range_. 


select
	side_number,
    range_
from airliners
where (range_>1000 and range_ <= 2500) or range_  >= 6000;
 


-- 3. Выведите идентификаторы билетов бизнес-класса дешевле 65 000 и экономкласса дороже 15 000. 
-- Исключите из выборки билеты рейсов VR5SF5YIWN, OZAO28DLFP и LL4S1G8PQW, так как для них ценовая политика не меняется.
-- В выборке должен присутствовать один атрибут — id. 
    

select 
	id
from tickets
where ((service_class = 'Business' and price < 65000) or (service_class = 'Economy' and price > 15000)) and trip_id not in ('VR5SF5YIWN','OZAO28DLFP','LL4S1G8PQW');


select 
	count(id)
from tickets
where ((service_class = 'Business' and price < 65000) or (service_class = 'Economy' and price > 15000)) and trip_id not in ('VR5SF5YIWN','OZAO28DLFP','LL4S1G8PQW');


-- 5. Для каждого самолета модели Cessna 172 выведите дальность полета. 
-- Имя столбца с результатом должно быть max_distance.
-- В выборке должен присутствовать один атрибут — max_distance. 

select 
	range_ as max_distance
from airliners
where model_name = 'Cessna 172';

-- 6. Разделите самолеты на ближне-, средне- и дальнемагистральные. 
-- Ближнемагистральными будем считать самолеты, дальность полета которых > 1000 км и <= 2500 км. 
-- Среднемагистральными — с дальностью полета > 2500 км и <= 6000 км. 
-- Дальнемагистральными — с дальностью полета > 6000 км. 
-- В выборке должно быть два столбца, где в первом указана модель самолета. 
-- Во втором, category, — категория, со значениями short-haul, medium-haul, long-haul (ближне-, средне- и дальнемагистральные соответственно). 
-- Каждый самолет точно попадает ровно в одну категорию.
-- В выборке должны присутствовать два атрибута — model_name, category. 


select
	model_name,
    case 
		when range_ > 1000 and range_ <= 2500 then 'short-haul'
		when range_ > 2500 and range_ <= 6000 then 'medium-haul'
        when range_ > 6000 then 'long-haul'
	end as category
from airliners;






















