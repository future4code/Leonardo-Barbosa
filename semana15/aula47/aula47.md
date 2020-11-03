### Exercício 1 

a) Uma chave estrangeira é uma chave primária de outra tabela;

b) 
```sh
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
"01",
"Bom filme de comédia.",
10,
"001"
);
```

c) Não é possível adicionar uma linha pois a chave estrangeira não existe;

d)
```
  ALTER TABLE Movie DROP COLUMN rating;
```
e) Não foi possível excluir, falha na chave estrangeira;

### Exercício 2

a) Essa tabela relaciona o id da tabela actor e movie com o id da tabela moviecast;

b) 
```sh
    INSERT INTO MovieCast(movie_id, actor_id)
VALUES (
	"004",
    "001"
);
```

c) Falha na chave estrangeira;

d) Falha na chave estrangeira;


### Exercício 3 

a) O poerador ON seria a condição de retorno do JOIN;

b) 
```
  SELECT title, Movie.id, Rating.rate  FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```
