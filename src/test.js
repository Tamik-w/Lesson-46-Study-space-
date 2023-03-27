import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import SinglePost from './components/SinglePost';

describe('SinglePost', () => {
  it('displays the header of the post', async () => {
    const postId = '1';
    const postTitle = 'Test post';
    const postBody = 'This is a test post';
    const mockData = {
      id: postId,
      title: postTitle,
      body: postBody,
    };
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    render(
      <MemoryRouter initialEntries={[`/news/${postId}`]}>
        <Route path='/news/:id'>
          <SinglePost />
        </Route>
      </MemoryRouter>
    );

    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent(postTitle);
  });
});
