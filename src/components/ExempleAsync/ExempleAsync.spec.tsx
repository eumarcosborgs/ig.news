import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { ExempleAsync } from '.'

test('it renders correctly', async () => {
  render(
    <ExempleAsync />
  )

  expect(screen.getByText('Hello Word')).toBeInTheDocument()

  /**
   * É necessário usar métodos async já que o getByText() não espera
   * 
   * A função findByText() expera até uma quantidade de segundos, você pode alterar esse valor, passando no terceiro parametro
   * expemplo: findByText('Button', {}, { timeout: 5000 })
   * 
   * Pode-se usar a funcão waitFor, que também recebe o timeout com parametro
   */
  // expect(await screen.findByText('Button')).totoBeInTheDocument()

  await waitFor(() => {
    return expect(screen.getByText('VisibleButton')).toBeInTheDocument()
  }, {
    // timeout: 3000 // 3 seconds
  })

  // usando .not para verificar se não está no documento, tem que se trocar a funcão do screen para screen.queryByText()
  await waitFor(() => {
    return expect(screen.queryByText('InVisibleButton')).not.toBeInTheDocument()
  }, {
    // timeout: 3000 // 3 seconds
  })

  // Testing playground
  screen.logTestingPlaygroundURL()

})