import User from '../models/User.js' // Importa um modelo de User

const createService = body => User.create(body) // Cria um usuario no banco de dados 

const findAllService = () => User.find() // Procura todos os usuarios no banco de dados

const findByIdService = id => User.findById(id) // Procura um usuario por ID no bancod de dados

const updateService = ( // Atualiza um usuario no banco de dados
  id,
  name,
  username,
  email,
  password,
  avatar,
  background
) =>
  User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
  )

  export default { // Exporta para usarmos em outros arquivos
  createService,
  findAllService,
  findByIdService,
  updateService
}
