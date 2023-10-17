import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatoSlice = createSlice({
  name: 'Contato',
  initialState: [
    new Contato(
      'Icaro Natã Fadel',
      '(11) 94926-8848',
      'icaro.nata147@gmail.com',
      1
    ),
    new Contato(
      'Ana Karolina',
      '(11) 94926-8848',
      'icaro.nata147@gmail.com',
      2
    ),
    new Contato(
      'Vitor G. Souza',
      '(11) 94926-8848',
      'icaro.nata147@gmail.com',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer
