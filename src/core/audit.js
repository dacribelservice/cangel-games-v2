/**
 * Cangel V2 - Sistema de Bitácora de Eventos
 */
import { AppState, saveLocal } from './state'

export const AuditService = {
  log: (action, description, details = {}) => {
    const entry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      user: AppState.currentUser?.name || 'Sistema',
      action,
      description,
      details
    }
    
    AppState.logs.unshift(entry)
    saveLocal()
    console.log('Audit Log:', entry)
  }
}
