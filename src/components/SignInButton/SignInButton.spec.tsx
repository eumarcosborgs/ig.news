import { render, screen } from '@testing-library/react'
import { SignInButton } from '.'
import { useSession } from 'next-auth/react'
import { mocked } from 'jest-mock'

jest.mock('next-auth/react')

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionsMocked = mocked(useSession)

    useSessionsMocked.mockReturnValueOnce({
      data: null,
      status: 'loading'
    })

    render(
      <SignInButton />
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    const useSessionsMocked = mocked(useSession)

    useSessionsMocked.mockReturnValueOnce({
      data: {
        user: { name: "John Doe", email: "john.doe@example.com" },
        expires: "fake-expires",
      },
      status: "authenticated",
    })

    render(
      <SignInButton />
    )

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})