import { render, screen, fireEvent } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import { SubscribeButton } from '.'

jest.mock('next-auth/react')
jest.mock('next/router')

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'loading'
    })

    render(
      <SubscribeButton />
    )

    expect(screen.getByText('Subscribe now')).toBeInTheDocument()
  })

  it('redirects user to signin in when not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'loading'
    })

    const signInMocked = mocked(signIn)

    render(
      <SubscribeButton />
    )
    
    const subscriptionButton = screen.getByText('Subscribe now')

    fireEvent.click(subscriptionButton)

    expect(signInMocked).toHaveBeenCalled()
  })

  it('redirects to posts when user already has a subscription', () => {
    const useSessionsMocked = mocked(useSession)

    useSessionsMocked.mockReturnValueOnce({
      data: {
        user: { name: "John Doe", email: "john.doe@example.com" },
        expires: "fake-expires",
        activeSubscription: 'fake-active-subscription',
      },
      status: "authenticated"
    })

    const useRouterMocked = mocked(useRouter)

    const pushMock = jest.fn()

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any)

    render(
      <SubscribeButton />
    )
    
    const subscriptionButton = screen.getByText('Subscribe now')

    fireEvent.click(subscriptionButton)

    expect(pushMock).toHaveBeenCalledWith('/posts')

  })
})