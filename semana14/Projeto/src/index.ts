import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());

type userCount = {
  id: number,
  nome: string,
  cpf: number,
  nascimento: string,
  saldo: number,
};

type transactions = {
  nome: string,
  cpf: string,
  nomeDestinatario: string,
  cpfDestinatario: string,
  valor: number
};

const users: userCount[] = [
  {
    id: 1,
    nome: 'José',
    cpf: 12345678912,
    nascimento: '02/10/2000',
    saldo: 1000,
  },
  
];

app.post('/users', (req: Request, res: Response): void => {

  try {

    const { id, nome, cpf, nascimento, saldo } = req.body;

    const user: userCount = {
      id: id,
      nome: nome,
      cpf: cpf,
      nascimento: nascimento,
      saldo: saldo,
    };

    users.push(user);

    res.status(200).send({ message: 'Usuário criado com sucesso' });

  } catch (error) {

    res.status(400).send({ message: 'Erro ao criar usuário'})
   }
})

app.get('/users', (req: Request, res: Response): void => {

  try {

    res.status(200).send(users);

  } catch (error) {

    res.status(400).send({

      message: 'Erro au buscar usuários'
    })
  };
});



















app.listen(3000, () => {
  console.log('servidor pronto')
});