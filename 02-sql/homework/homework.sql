create table Movies (
   id INTEGER PRIMARY KEY,
   name TEXT,
   year INTEGER,
   rank REAL
);

create table Actors (
   id INTEGER PRIMARY KEY,
   first_name TEXT default value NULL,
   last_name TEXT default value NULL,
   gender TEXT default value NULL
);

create table Roles (
   id INTEGER,
   movie_id INTEGER,
   role_name TEXT default value NULL
);

SELECT name, year FROM movies WHERE year=1902 AND rank>5;

-- Birthyear Buscá todas las películas filmadas en el año que naciste.--

SELECT name, year FROM movies WHERE year=1989;

-- 1982 Cuantas películas hay en la DB que sean del año 1982? ---

SELECT COUNT(*) name FROM movies WHERE year=1982;

-- Stacktors, Buscá actores que tengan el substring stack en su apellido.
SELECT * FROM actors WHERE last_name LIKE '%stack%';

--Fame Name Game,Buscá los 10 nombres y apellidos más populares entre los actores. Cuantos actores tienen cada uno de esos nombres y apellidos?
SELECT first_name, last_name, COUNT(*) AS total
FROM actors
GROUP BY LOWER(first_name), LOWER(last_name)
ORDER BY total DESC
LIMIT 10;

-- Prolific,Listá el top 100 de actores más activos junto con el número de roles que haya realizado.
SELECT a.first_name, a.last_name, COUNT(*) AS total_Roles
FROM roles r JOIN actors a
ON a.id=r.actor_id GROUP BY a.id ORDER BY total_Roles DESC LIMIT 100;

