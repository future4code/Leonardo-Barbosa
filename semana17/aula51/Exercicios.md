### Exercício 1

a) O salt é um valor aleatório e deve ser diferente para cada cálculo, portanto, o resultado dificilmente deve ser o mesmo, mesmo para senhas iguais. O Round controla quanto tempo é necessário para calcular um único hash BCrypt. Quanto mais alto o Round, mais rodadas de hash são feitas. Usei o 12 por ser padrão.

b) 
```
export default async function generateHash(s: string): Promise<string> {

  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(s, salt);

  return result;
}
```

c)
```
const compare = async(s: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(s, hash);
}
```

### Exercício 2

a) No login, ao cair no if que compara as senhas vai apresentar o erro;

