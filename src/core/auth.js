/**
 * Cangel V2 - Lógica Real de Acceso
 */
export const AuthService = {
  login: async (email, password) => {
    console.log('Intento de login para:', email)
    // Implementación futura con Supabase
    return { success: true, user: { name: 'Admin', role: 'admin' } }
  },
  logout: () => {
    localStorage.removeItem('cangel_session')
    window.location.reload()
  }
}
