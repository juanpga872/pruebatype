
import { AuthController } from "./controller/AuthController";

// Se ejecuta cuando el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
  const authController = new AuthController();

  // Manejo del formulario de registro
  const registerForm = document.getElementById('register-form') as HTMLFormElement;
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      authController.handleRegister(email, password);
    });
  }

  // Manejo del formulario de inicio de sesión
  const loginForm = document.getElementById('login-form') as HTMLFormElement;
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const password = (document.getElementById('password') as HTMLInputElement).value;
      authController.handleLogin(email, password);
    });
  }

});

// // Funciones para ver, editar y eliminar posts
// function viewPostDetail(postId: number) {
//   window.location.href = `post-detail.html?postId=${postId}`;
// }

// function editPost(postId: number) {
//   window.location.href = `create-edit-post.html?postId=${postId}`;
// }

// function deletePost(postId: number) {
//   // Aquí puedes implementar la lógica para eliminar un post
//   alert(`Eliminar post ${postId}`);
// }


