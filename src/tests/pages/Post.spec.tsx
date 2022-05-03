import { render, screen } from '@testing-library/react'
import { mocked } from 'jest-mock'
import { getSession } from 'next-auth/react'

import { getPrismicClient } from '../../services/prismic'
import Post, { getServerSideProps } from '../../pages/posts/[slug]'

jest.mock('../../services/prismic')
jest.mock('next-auth/react')

const post = {
  slug: 'my-new-post',
  title: 'My new post',
  content: '<p>Post excerpt<p>',
  updatedAt: '10 de Abril'
}

describe('Post page', () => {
  it ('renders correctely', () => {
    render(
      <Post post={post} />
    )

    expect(screen.getByText('My new post')).toBeInTheDocument()
    expect(screen.getByText('Post excerpt')).toBeInTheDocument()
  })

  it('redirects user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession)

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: null
    } as any)

    const response = await getServerSideProps({ params: { slug: 'my-new-post' }} as any)

    expect(response).toEqual(
      expect.objectContaining({ //verifica se o obj contem os dados passado '!= de ser igual'
        redirect: expect.objectContaining({
          destination: '/posts/preview/my-new-post',
        })
      })
    )
  })

  it('loads initial data', async () => {
    const getSessionMocked = mocked(getSession)
    const getPrismicClientMocked = mocked(getPrismicClient)

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription'
    } as any)

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: "heading", text: "My new post" }],
          content: [{ type: "paragraph", text: "Post content" }],
        },
        last_publication_date: "04-01-2021",
      })
    } as any)

    const response = await getServerSideProps({ params: { slug: 'my-new-post' }} as any)

    expect(response).toEqual(
      expect.objectContaining({ //verifica se o obj contem os dados passado '!= de ser igual'
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post content</p>',
            updatedAt: '01 de abril de 2021'
          }
        }
      })
    )
    
  })
})