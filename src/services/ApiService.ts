const API_URL = 'https://api-posts.codificando.xyz';

//aqui creamos la funcion de crar usuario
export async function createUser(user: { email: string; password: string }) {
  const response = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  if (!response.ok) throw new Error('Error al crear usuario');
  return await response.json();
}

//aqui la funsion del login
export async function loginUser(user: { email: string; password: string }) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  if (!response.ok) throw new Error('Error al iniciar sesión');
  return await response.json();
}

//aqui la funcion para optener los post
export async function getUserPosts(userId: string) {
  const response = await fetch(`${API_URL}/posts?userId=${userId}`);
  if (!response.ok) throw new Error('Error al obtener posts');
  return await response.json();
}

//aqui la de crear post
export async function createPost(post: any) {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  });
  if (!response.ok) throw new Error('Error al crear el post');
  return await response.json();
}

//aqui la de editar un post
export async function updatePost(postId: number, post: any) {
  const response = await fetch(`${API_URL}/posts/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  });
  if (!response.ok) throw new Error('Error al actualizar el post');
  return await response.json();
}


