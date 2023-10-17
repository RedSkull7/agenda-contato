import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Icaro Natã Fadel',
      numero: '(11) 94926-8848',
      email: 'icaro.nata147@gmial.com'
    },
    {
      id: 2,
      nome: 'Ana Karolina',
      numero: '(11) 94926-8848',
      email: 'icaro.nata147@gmial.com'
    },
    {
      id: 3,
      nome: 'Vitor G. Souza',
      numero: '(11) 94926-8848',
      email: 'icaro.nata147@gmial.com'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'Contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer
