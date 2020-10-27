### Exercício 1 

a) VARCHAR é pra utilizar string, 
   PRIMARY KEY é a chave única, 
   NOT NULL o campo não pode ser nulo, 
   DATE campo com data.

b) SHOW DATABASES pelo que entendi, mostra meus bancos de dados, 
   SHOW TABLES mostra minhas tabelas criadas.

c) DESCRIBE Actor mostra toda a tipagem da tabela e sua configuração.

### Exercício 2

a) `INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");` 

b) `INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES("002", "Louro José", 50000, "1980-05-15", "male");` 
   
   * A chave primária foi duplicada, por isso o erro.

c) Faltaram duas colunas (birth_date, gender).

d) O campo nome está vazio.

e) Valor da data está incorreta.

f) `INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES( "004", "Antônio Fagundes", 400000, "1949-04-18", "male");` 

   `INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES( "005", "Juliana Paes", 719333.33, "1979-03-26", "female"); `

### Exercício 3 

a) `SELECT * from Actor WHERE gender = "female";`

b) `SELECT salary, name from Actor where name = "Tony Ramos";`

c) `SELECT * FROM Actor WHERE gender = "invalid";`
   * No meu caso apareceu null. 

d) `SELECT id, name, salary from Actor where salary <= 500000;`

e) O campo name estava incorreto. 
   `SELECT id, name from Actor WHERE id = "002";`


### Exercício 4

a) Está buscando todos os atores que tenham a letra A ou a letra J no name.

b) 
   ```
   SELECT * FROM Actor
   WHERE name NOT LIKE "A%" AND salary > 35000000;
   
   ```

c) 
   ```
   SELECT * FROM Actor
   WHERE name LIKE "G%" OR name LIKE "g%";

   ```

d)
   ```
   SELECT * FROM Actor
   WHERE (name LIKE "a%"OR name LIKE "A%" OR name LIKE "g%" OR name LIKE "G%") 
   AND ( salary = 35000000 OR salary <= 90000000);

   ```
### Exercício 5 

a) A query cria uma tabela contendo id, titulo, sinopse, data de lançamento e nota do filme.

b) c) d) e) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES 
( "001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7),
( "002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
( "003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
( "004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.", "2003-01-31", 9); 

```

### Exercício 6 

a) ` SELECT id, title, rating FROM Movie WHERE rating = 7;`

b) ` SELECT title FROM Movie WHERE synopsis LIKE "%anos%";`

c) ` SELECT id, title, synopsis FROM Movie WHERE rating >= 7; `

### Exercício 7

a) `SELECT * FROM Movie WHERE title LIKE "%vida%";`

b) `SELECT * FROM Movie WHERE title LIKE "%a%" OR synopsis LIKE "%dela%";`

c) `SELECT * FROM Movie WHERE release_date < "2020-10-26";`

d) `SELECT * FROM Movie WHERE release_date < "2020-10-26" 
   AND (title LIKE "%anos%" OR synopsis LIKE "%com%") AND rating >7;`