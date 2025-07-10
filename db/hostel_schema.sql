create table user (user_id int primary key, 
                   fname varchar(20) not null, 
                   lname varchar(20) not null, 
                   email text, 
                   usertype varchar(10), 
                   check (usertype in( 'Warden', 'Student')));

create table student (user_id INT primary key, 
                      contact varchar(10) not null, 
                      guardian_contact varchar(10) not null, 
                      address text, 
                      year int, 
                      department varchar(10), 
                      room_no int, 
                      check (department in('Comp', 'IT', 'ENTC', 'ECE', 'AIDS')), 
                      foreign key (user_id) references user(user_id));