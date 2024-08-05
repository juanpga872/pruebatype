
import { createUser,loginUser } from "../services/ApiService";

// Clase que maneja la autenticación del usuario
export class AuthController {
  constructor() {}

  // Función para manejar el registro de nuevos usuarios
  async handleRegister(email: string, password: string): Promise<void> {
    try {
      // Llama a la función createUser del servicio API
      const response = await createUser({ email, password });

      // Verifica si la respuesta indica éxito
      if (response.success) {
        console.log('Usuario creado exitosamente:', response.data);
        alert('Usuario creado exitosamente. Por favor, inicia sesión.');
        window.location.href = 'login.html'; // Redirige a la vista de login
      } else {
        throw new Error(response.message || 'Error al crear usuario');
      }
    } catch (error) {
      // Maneja errores y muestra un mensaje en caso de fallo
      console.error('Error en handleRegister:', error);
      alert('Hubo un error al crear el usuario. Por favor, intenta de nuevo.');
    }
  }

  // Función para manejar el inicio de sesión de los usuarios
  async handleLogin(email: string, password: string): Promise<void> {
    try {
      // Llama a la función loginUser del servicio API
      const response = await loginUser({ email, password });

      // Verifica si la respuesta contiene un token de autenticación
      if (response.token) {
        sessionStorage.setItem('authToken', response.token);
        console.log('Usuario autenticado:', response.data);
        window.location.href = 'home.html'; // Redirige a la vista de inicio
      } else {
        throw new Error(response.message || 'Credenciales inválidas');
      }
    } catch (error) {
      // Maneja errores y muestra un mensaje en caso de fallo
      console.error('Error en handleLogin:', error);
      alert('Hubo un error al iniciar sesión. Por favor, intenta de nuevo.');
    }
  }

  // Función para manejar el cierre de sesión de los usuarios
  handleLogout(): void {
    sessionStorage.removeItem('authToken');
    window.location.href = 'login.html'; // Redirige a la vista de login
  }
}




