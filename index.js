import express from 'express' // Importa o express dentro do index.js
import connectDatabase from './src/database/db.js'; // Importando connectDatabase para se conectar com o Mongo DB
import dotenv from 'dotenv' // Importando o dotenv para criar variaveis de ambiente

import userRoute from './src/routes/user.route.js'; // Importa o userRoute de user.route.js
import authRoute from './src/routes/auth.route.js';
import newsRoute from './src/routes/news.route.js';

const port = process.env.PORT || 2411; // Uma porta para o localhost
const app = express(); 

dotenv.config(); // Necessario para usar as variaveis de ambiente
connectDatabase(); // Necessario para conectar ao banco de dados
app.use(express.json()); // Necesario para retorna um arquivo json 
app.use('/user', userRoute); // Utlizando essa linha para acessa a rota user, e ela acessa o userRoute
app.use('/auth', authRoute); // Utlizando essa linha para acessa a rota auth, e ela acessa o authRoute
app.use('/news', newsRoute);
 

app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`)); // Utiliza a variavel port para se conectar a porta do servidor, e cria uma arrow function inline, que contém um console.log que mostra se o servidor funcionou!