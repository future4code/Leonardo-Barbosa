import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { countries, country } from './countries';

const app: Express = express();

app.use(express.json());
app.use(cors());


app.get('/countries/all', (req: Request, res: Response) => {
  const result = countries.map(country => ({
    id: country.id,
    name: country.name
  }))
  
  res.status(200).send(result)
})


app.get('/countries/:id', (req: Request, res: Response) => {
  const result: country | undefined = countries.find(
    country => country.id === Number(req.params.id)
 )
 
 if (result) {
    res.status(200).send(result)
 } else {
    res.status(404).send("Not found")
 }
})


app.get("/countries/search", (req: Request, res: Response) => {

let result: country[] = countries

if (req.query.name) {
   result = result.filter(
      country => country.name.includes(String(req.query.name).toLowerCase())
   )
   res.status(200).send(result.length)
}

else if (req.query.capital) {
   result = result.filter(
      country => country.capital.includes(String(req.query.capital).toLowerCase())
   )
   res.status(200).send(result.length)
}

else if (req.query.continent) {
   result = result.filter(
      country => country.continent.includes(String(req.query.continent).toLowerCase())
   )
   res.status(200).send(result.length)
} 
else {
  res.status(404).send('Not Found')
}


})



















app.listen(3005, () => {
  console.log('servidor pronto')
});