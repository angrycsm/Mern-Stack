const express = require('express');
const app = express();
const userRoute = require('./src/routes/user.route');

const port = 2411
app.use(express.json());
app.use('/user', userRoute);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));