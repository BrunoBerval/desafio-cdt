import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserCard } from '../../../src/components/users/UserCard'
import type { User } from '../../../src/types/users'

const mockUser: User = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' },
  },
  phone: '1-770-736-8031',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered neural-net',
    bs: 'harness real-time e-markets',
  },
}

describe('UserCard', () => {
  it('renders user name and email', () => {
    render(<UserCard user={mockUser} onClick={() => {}} />)
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
    expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument()
  })

  it('calls onClick when the card is clicked', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<UserCard user={mockUser} onClick={handleClick} />)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})