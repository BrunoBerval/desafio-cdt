import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from '../../../src/components/users/SearchBar'

describe('SearchBar', () => {
  it('renders with the provided value', () => {
    render(<SearchBar value="Leanne" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toHaveValue('Leanne')
  })

  it('calls onChange with the typed character', async () => {
    const user = userEvent.setup()
    const handleChange = jest.fn()
    render(<SearchBar value="" onChange={handleChange} />)
    await user.type(screen.getByRole('textbox'), 'L')
    expect(handleChange).toHaveBeenCalledWith('L')
  })
})