import userService from '../services/user.service.js' // Importa o userService onde o userService faz chamada pro banco de dados e cria o que pede.

const create = async (req, res) => { // uma variavel que contém uma arrow function, que precisa de uma requisição e uma resposta
  try { // try - tente
    const { name, username, email, password, avatar, background } = req.body // uma varivavel que guarda o que o usuario precisa por para o cadastro ser feito!

    if (!name || !username || !email || !password || !avatar || !background) { // um if para caso o usuario não forneça alguns desses nomes!
      res.status(400).send({ message: 'Submit all fields for registration' }) // se caso não tenha algum desses ele responde que precisa haver um desses!
    }

    const user = await userService.createService(req.body) // Cria o usuario apartir do userService que faz chamada pro MongoDB Atlas, utilizando a função await para que possamos esperar que ele crie para depois continuar o código

    if (!user) { // if caso não tenha o user ele vai retornar um error
      return res.status(400).send({ message: 'Error creating User' })
    }

    res.status(201).send({ // Caso de certo criar o usuario ele respondar com status 201 OK, e mostrara um .json mostrando o id, e o resto que foi pedido
      message: 'User created successfully',
      user: {
        id: user._id,
        name,
        username,
        email,
        avatar,
        background
      }
    })
  } catch (err) {
    res.status(500).send({ message: err.message }) // é preciso por que a gente pois o codigo dentro do try e é preciso o catch, então pomos tente fazer tudo isso, e um erro no final caso aconteça algo de errado!
  }
}

const findAll = async (req, res) => { // Criando uma variavel que contém uma arrow function async.
  try { // try - tente
    const users = await userService.findAllService() // Faz contato com o banco de dados para procurar se existe um usuario dentro do MongoDB Atlas

    if (users.length === 0) { // If que faz um length que verifica se for igual a 0 significa que não tem nenhum um usuario e retorna uma mensagem 
      return res.status(400).send({ message: 'There are no registered users' })
    }

    res.send(users) // Caso tenha algum usuario, responde mostrando
  } catch (err) { // Caso de algum error mostre o error, faz parte do try.
    res.status(500).send({ message: err.message })
  }
}

const findById = async (req, res) => { // Criando uma variavel que é arrow function async que procura os usuarios por ID
  try { // try - tente
    const { id, user } = req
    res.send(user)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const update = async (req, res) => { // Cria uma variavel que é uma arrow function async que atualiza caso o usuario faça alguma alteração no nome etc.
  try { // try - tente
    const { name, username, email, password, avatar, background } = req.body // Utilizando a mesma linha de codigo acima criamos a variavel que precisamos ter todos esses para criar o nosso body

    if (!name && !username && !email && !password && !avatar && !background) { // if, caso o usuario não forneça nenhum, enviamos uma resposta que ele responda com ao menos uma alteração.
      res.status(400).send({ message: 'Submit at least one field for update' })
    }

    const { id, user } = req 

    await userService.updateService( // dar a updateService no banco de dados no MongoDB
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    )

    res.send({ message: 'User successfully updated!' })
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

export default { create, findAll, findById, update };
