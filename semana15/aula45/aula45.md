### Exercício 1

a) Remove a coluna salary da tabela Actor;

b) Troca a coluna gender por sex até 6 carácteres;

c) Troca a coluna gender por gender até 255 caracteres;

d) ` ALTER TABLE Actor CHANGE gender gender VARCHAR(100); `

### Exercício 2 

a) ` UPDATE Actor SET name = "desconhecido" AND birth_date = "1980-05-15" WHERE id = "003" `

b) `UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";`
   `UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";`

c) ` UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10",
   salary = 600000, gender = "male" WHERE id = "005";`


### Exercício 3 

a) `DELETE FROM Actor WHERE name = "Fernanda Montenegro";`

b) `DELETE FROM Actor WHERE gender = "male" AND salary > 100000000;`


### Exercício 4

a) `SELECT MAX(salary) FROM Actor; `

b) `SELECT MIN(salary) FROM Actor WHERE gender = "female";`

c) ` SELECT COUNT(*) FROM Actor WHERE gender = "female";` 

d) `SELECT SUM(salary) FROM Actor; `

### Exercício 5

a) Retorna a quantidade de atores por genero;

b) `SELECT id, name FROM Actor ORDER BY name DESC;`

c) `SELECT * FROM Actor ORDER BY salary;`

d) `SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;`

e) `SELECT AVG(salary), gender FROM Actor GROUP BY gender;`

### Exercício 6 

a) `ALTER TABLE Movie ADD playing_limit_date DATE;`

b) `ALTER TABLE Movie CHANGE rating rating FLOAT;`

c) `UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";`

d) `DELETE FROM Movie WHERE id = "001";`
    Retornou vazio


### Exercício 7   

a) `SELECT COUNT(*) FROM Movie WHERE rating > 7.5;`

b) `SELECT AVG(rating) FROM Movie;`

c) `SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();`

d) `SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();` 

e) `SELECT MAX(rating) FROM Movie;`

f) `SELECT MIN(rating) FROM Movie;`


### Exercício 8

a) `SELECT * FROM Movie ORDER BY title;`

b) `SELECT * FROM Movie ORDER BY title DESC LIMIT 5 ;`

c) `SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;`

d) `SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;`