create database youdemy;
use youdemy;

create table app_role(
id bigint auto_increment primary key,
flag_deleted bit null,
name varchar(255) not null
);

create table app_user(
    id bigint auto_increment primary key,
    flag_deleted bit null,
    password varchar(255) not null,
    user_name varchar(255)not null,
    app_role_id bigint,
    FOREIGN KEY (app_role_id) REFERENCES app_role(id)
);


CREATE TABLE instructors (
    id bigint auto_increment primary key,
	name varchar(255),
    bio longtext null,
    qualification varchar(255) null,
    email VARCHAR(255),
    app_uesr_id bigint,
    FOREIGN KEY (app_uesr_id) REFERENCES app_user(id)
);

CREATE TABLE students (
    id bigint auto_increment primary key,
	name varchar(255),
    phone_number varchar(20),
    email VARCHAR(255),
    app_uesr_id bigint,
    FOREIGN KEY (app_uesr_id) REFERENCES app_user(id)
);

CREATE TABLE course_type(
id bigint auto_increment primary key,
name varchar(255)
);

CREATE TABLE courses (
    id bigint auto_increment primary key,
    name VARCHAR(100),
    image longtext,
    description TEXT,
    price double,
    app_user_id bigint,
    course_type_id bigint,
    FOREIGN KEY (app_user_id) REFERENCES app_user(id),
    FOREIGN KEY (course_type_id) REFERENCES course_type(id)
);

CREATE TABLE videos (
    id bigint auto_increment primary key,
    course_id bigint,
    title VARCHAR(100),
    urlPath VARCHAR(255),
    is_free BIT, 
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE comments (
    id bigint auto_increment primary key,
    video_id bigint,
    app_user_id bigint,
    comment_text longtext,
    comment_date DATE,
    FOREIGN KEY (video_id) REFERENCES videos(id),
    FOREIGN KEY (app_user_id) REFERENCES app_user(id)
);

CREATE TABLE purchases (
    id bigint auto_increment primary key,
    app_user_id bigint,
    course_id bigint,
    purchase_date DATE,
    FOREIGN KEY (app_user_id) REFERENCES app_user(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE cart (
	id bigint auto_increment primary key,
	app_user_id bigint,
    course_id bigint,
    FOREIGN KEY (app_user_id) REFERENCES app_user(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);


CREATE TABLE favorites (
    app_user_id bigint,
    course_id bigint,
    FOREIGN KEY (app_user_id) REFERENCES app_user(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);






