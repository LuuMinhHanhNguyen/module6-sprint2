create database thecoach;
use thecoach;

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
    name text,
    image longtext,
    `description` longtext,
    price double,
    app_user_id bigint,
    course_type_id bigint,
    FOREIGN KEY (app_user_id) REFERENCES app_user(id),
    FOREIGN KEY (course_type_id) REFERENCES course_type(id)
);

CREATE TABLE videos (
    id bigint auto_increment primary key,
    course_id bigint,
    title text,
    url_path longtext,
    is_free BIT, 
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

CREATE TABLE comments (
    id bigint auto_increment primary key,
    course_id bigint,
    app_user_id bigint,
    comment_text longtext,
    comment_date varchar(255),
    rating int,
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (app_user_id) REFERENCES app_user(id)
);

CREATE TABLE purchases (
    id bigint auto_increment primary key,
    app_user_id bigint,
    course_id bigint,
    purchase_date varchar(255),
    price double,
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
id bigint auto_increment primary key,
    app_user_id bigint,
    course_id bigint,
    FOREIGN KEY (app_user_id) REFERENCES app_user(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
); 

-- CREATE TABLE questions (
--     id bigint auto_increment primary key,
--     course_id bigint,
--     app_user_id bigint,
--     question_text longtext,
--     question_date varchar(255),
--     FOREIGN KEY (course_id) REFERENCES courses(id),
--     FOREIGN KEY (app_user_id) REFERENCES app_user(id)
-- );

CREATE TABLE questions (
    id bigint auto_increment primary key,
    course_id bigint,
    app_user_id bigint,
    question_text longtext,
    question_date varchar(255),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (app_user_id) REFERENCES app_user(id)
);

CREATE TABLE answers (
    id bigint auto_increment primary key,
    question_id bigint,
    app_user_id bigint,
    answer_text longtext,
    answer_date varchar(255),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (app_user_id) REFERENCES app_user(id)
);

CREATE TABLE question_likes (
    id bigint auto_increment primary key,
    question_id bigint,
    app_user_id bigint,
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (app_user_id) REFERENCES app_user(id)
);

CREATE TABLE answer_likes (
    id bigint auto_increment primary key,
    answer_id bigint,
    app_user_id bigint,
    FOREIGN KEY (answer_id) REFERENCES answers(id),
    FOREIGN KEY (app_user_id) REFERENCES app_user(id)
);


-- drop database thecoach;








