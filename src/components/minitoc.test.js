import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import Minitoc from './minitoc.js'

test('folds content when click on In this Page', async () => {
  render(<Minitoc />)
  const inThisPage = screen.getByTitle('click here to fold/unfold the mini table of contents')
  const minitocRoot = screen.getByTitle('minitoc root')
  expect(getComputedStyle(minitocRoot).display).toBe('block')
  fireEvent.click(inThisPage)
  await waitFor(() => {
    expect(getComputedStyle(minitocRoot).display).toBe('none')
  })
})