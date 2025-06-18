import { render, screen, fireEvent } from '@testing-library/react'
import PostComment from '../components/PostComments'
import '@testing-library/jest-dom'

describe('Teste para o componente PostComment', () => {
    it('Deve permitir inserir dois comentários', () => {
    render(<PostComment />)

    const inputNome = screen.getByTestId('input-nome')
    const inputComentario = screen.getByTestId('input-comentario')
    const botao = screen.getByTestId('botao-enviar')

    // Comentário 1
    fireEvent.change(inputNome, { target: { value: 'João' } })
    fireEvent.change(inputComentario, { target: { value: 'Muito bom!' } })
    fireEvent.click(botao)

    // Comentário 2
    fireEvent.change(inputNome, { target: { value: 'Maria' } })
    fireEvent.change(inputComentario, { target: { value: 'Gostei bastante!' } })
    fireEvent.click(botao)

    const comentarios = screen.getAllByTestId('comentario-item')
    expect(comentarios.length).toBe(2)
    expect(comentarios[0]).toHaveTextContent('João')
    expect(comentarios[1]).toHaveTextContent('Maria')
  })
})