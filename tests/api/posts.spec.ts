
import { test, expect } from '@playwright/test';

test('API - Obtener un post por ID', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json')

  const post = await response.json();

    expect(post).toHaveProperty('userId', 1)
    expect(post).toHaveProperty('id', 1)
    expect(typeof post.title).toBe('string')
    expect(post.title.trim().length).toBeGreaterThan(0)
    expect(typeof post.body).toBe('string')
    expect(post.body.trim().length).toBeGreaterThan(0)
})

test ('API - Obtener un post inexistente', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/999999')

  expect(response.status()).toBe(404)
})