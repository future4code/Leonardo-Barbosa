### Exercício 1

a) Com base na aula de hoje achei mais interessante usar um gerados a partir de números aleatórios e pseudo-aleatórios;

### Exercício 2

a) A função está criando um usuário da tabela User que está na constant UserTableName;

b)
```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY NOT NULL,
    email VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL
);
```

### Exercício 3

a) Está informando que o valor é uma string;

b) 
```
export function generateToken(
  payload: AuthenticationData
): string {
  return jwt.sign(
     payload,
     process.env.JWT_KEY as string,
     {
        expiresIn: "24min"
     }
  )
}
```

### Exercício 4
