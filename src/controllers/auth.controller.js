import bcrypt from 'bcrypt' // Bcrypt criptográfica as senhas, para que tantos os desenvolvedores que fazem o código possam não ver as senhas dos usuarios
import { loginService, generateToken } from '../services/auth.service.js' // Importa o loginService outra função desmembrada que faz chamada pro banco de dados(MONGODB)
const login = async (req, res) => {
  const { email, password } = req.body
  
  try {
    const user = await loginService(email)

    if (!user) {
        return res.status(404).send({ message: "User or Password not found"})
    }
   
    const passwordIsValid = bcrypt.compareSync(password, user.password)

    if (!passwordIsValid) {
        return res.status(404).send({ message: "User or Password not found"})
    }

    const token = generateToken(user.id)

    res.send({token});
  } catch (err) {
    res.status(500).send(err.message)
  }
} 

export { login }
