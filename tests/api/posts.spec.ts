
import { test, expect } from '@playwright/test';

test('API - Obtener un post por ID', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const post = await response.json();

  expect(post).toHaveProperty('userId');
  expect(post).toHaveProperty('id', 1);
  expect(post).toHaveProperty('title');
  expect(post).toHaveProperty('body');
});
