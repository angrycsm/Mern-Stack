import express from 'express'
import connectDatabase from './src/database/db.js';
import userRoute from './src/routes/user.route.js'

const port = 2411;
const app = express();

connectDatabase();
app.use(express.json());
app.use('/user', userRoute);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));