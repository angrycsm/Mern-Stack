const express = require('express');
const app = express();
const connectDatabase = require('./src/database/db')
const userRoute = require('./src/routes/user.route');

const port = 2411

connectDatabase()
app.use(express.json());
app.use('/user', userRoute);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));