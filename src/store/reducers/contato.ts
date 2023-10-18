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
      email: 'icaro.nata147@gmail.com'
    },
    {
      id: 2,
      nome: 'Ana',
      numero: '',
      email: ''
    },
    {
      id: 3,
      nome: 'Vitor G. Souza',
      numero: '(11) 94052-4458',
      email: 'vitor.souza@ibllogistica.com.br'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'Contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const IndexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (IndexDoContato >= 0) {
        state.itens[IndexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatosFiltrados = state.itens.filter(() => {
        const NomeJaExiste = state.itens.find(
          (contato) =>
            contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
        )
        const NumeroJaExiste = state.itens.find(
          (contato) =>
            contato.numero.toLowerCase() === action.payload.numero.toLowerCase()
        )
        const EmailJaExiste = state.itens.find(
          (contato) =>
            contato.email.toLowerCase() === action.payload.email.toLowerCase()
        )

        return NomeJaExiste || NumeroJaExiste || EmailJaExiste
      })
      const ContatoJaExiste = contatosFiltrados.length > 0

      if (ContatoJaExiste) {
        alert('Contato já existente')
      } else {
        const UltimoContato = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...action.payload,
          id: UltimoContato ? UltimoContato.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
