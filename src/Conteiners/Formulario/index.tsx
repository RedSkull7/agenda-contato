import { useState, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { MainContainer, Campo, BotaoSalvar } from '../../styles/index'
import Header from '../Header'
import { Form } from './styles'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispacth = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispacth(cadastrar({ nome, numero, email }))
    navigate('/')
  }

  return (
    <>
      <Header />
      <MainContainer>
        <Form onSubmit={cadastrarTarefa}>
          <Campo
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            type="text"
            placeholder="Nome completo"
          />
          <Campo
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
            type="tel"
            placeholder="Telefone"
          />
          <Campo
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="E-mail"
          />
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
      </MainContainer>
    </>
  )
}

export default Formulario
