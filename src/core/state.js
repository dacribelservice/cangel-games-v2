/**
 * Cangel V2 - Estado Global Local
 * Este archivo centraliza los datos para desarrollo offline.
 * Se migrará a Supabase en la Fase 5.
 */

export const AppState = {
  // Configuración
  config: {
    trm: 4000,
    margen_primaria_ps5: 1.4,
    margen_secundaria_ps5: 1.2,
    margen_primaria_ps4: 1.3,
    margen_secundaria_ps4: 1.1,
  },

  // Inventarios
  inventory: {
    games: [],
    codes: [],
    paquetes: [],
    membresias: [],
    xbox: [],
    physical: []
  },

  // Transacciones
  sales: [],
  expenses: [],
  incomeExtra: [],

  // Analytics y Otros
  catalog: [],
  clientsListas: [],
  logs: [],

  // Navegación UI
  activeTab: 'dashboard',
  theme: 'dark',
  currentUser: {
    name: 'Admin',
    role: 'admin'
  }
}


// Persistencia Temporal en LocalStorage para Desarrollo
export const loadLocal = () => {
  const data = localStorage.getItem('cangel_v2_dev_data')
  if (data) {
    const parsed = JSON.parse(data)
    Object.assign(AppState, parsed)
  }
}

export const saveLocal = () => {
  localStorage.setItem('cangel_v2_dev_data', JSON.stringify(AppState))
}
