import './style.css'
import { createIcons, Layout, ShoppingCart, Package, DollarSign, BarChart3, Receipt, Users, LogOut, Sun, Moon } from 'lucide'
import { AppState, loadLocal, saveLocal } from './core/state'

// Core App Initialization
const initApp = () => {
  loadLocal()
  
  // Apply initial theme
  document.documentElement.setAttribute('data-theme', AppState.theme)
  
  const app = document.querySelector('#app')
  renderLayout(app)
  switchTab(AppState.activeTab)
}

const renderLayout = (container) => {
  container.innerHTML = `
    <div class="app-container">
      <nav class="sidebar glass-card">
        <div class="logo">
          <span class="logo-text">Cangel<span class="accent">V2</span></span>
        </div>
        <div class="menu">
          <button class="menu-item ${AppState.activeTab === 'dashboard' ? 'active' : ''}" data-tab="dashboard">
            <i data-lucide="layout"></i> Dashboard
          </button>
          <button class="menu-item ${AppState.activeTab === 'ventas' ? 'active' : ''}" data-tab="ventas">
            <i data-lucide="shopping-cart"></i> Ventas
          </button>
          <button class="menu-item ${AppState.activeTab === 'inventario' ? 'active' : ''}" data-tab="inventario">
            <i data-lucide="package"></i> Inventario
          </button>
          <button class="menu-item ${AppState.activeTab === 'balance' ? 'active' : ''}" data-tab="balance">
            <i data-lucide="dollar-sign"></i> Balance
          </button>
          <button class="menu-item ${AppState.activeTab === 'catalogo' ? 'active' : ''}" data-tab="catalogo">
             <i data-lucide="bar-chart-3"></i> Catálogo
          </button>
        </div>
        <div class="user-profile">
          <div class="avatar">${AppState.currentUser.name.charAt(0)}</div>
          <div class="user-info">
            <span class="user-name">${AppState.currentUser.name}</span>
            <span class="user-role">${AppState.currentUser.role}</span>
          </div>
          <button class="logout-btn">
            <i data-lucide="log-out"></i>
          </button>
        </div>
      </nav>
      
      <main class="content">
        <header class="top-header">
          <h1 id="tab-title">Cargando...</h1>
          <div class="header-actions">
            <button id="theme-toggle" class="theme-switch">
              <i data-lucide="${AppState.theme === 'dark' ? 'sun' : 'moon'}"></i>
              <span>${AppState.theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
            </button>
          </div>
        </header>
        
        <section id="tab-content" class="tab-pane">
           <!-- Modules will render here -->
        </section>
      </main>
    </div>
  `
  
  // Attach Event Listeners
  container.querySelectorAll('.menu-item').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab))
  })

  container.querySelector('#theme-toggle').addEventListener('click', toggleTheme)

  // Initialize Lucide icons
  createIcons({
    icons: {
      Layout, ShoppingCart, Package, DollarSign, BarChart3, Receipt, Users, LogOut, Sun, Moon
    }
  })
}

const toggleTheme = () => {
  AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', AppState.theme)
  saveLocal()
  
  // Update button UI
  const btn = document.querySelector('#theme-toggle')
  const isDark = AppState.theme === 'dark'
  btn.innerHTML = `
    <i data-lucide="${isDark ? 'sun' : 'moon'}"></i>
    <span>${isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
  `
  createIcons({ icons: { Sun, Moon } })
}

const switchTab = (tabId) => {
  AppState.activeTab = tabId
  saveLocal()

  // Update UI UI Active State
  document.querySelectorAll('.menu-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId)
  })

  const titleEl = document.querySelector('#tab-title')
  const contentEl = document.querySelector('#tab-content')

  titleEl.innerText = tabId.charAt(0).toUpperCase() + tabId.slice(1)
  
  contentEl.innerHTML = `
    <div class="welcome-card glass-card">
      <h2>Módulo ${titleEl.innerText}</h2>
      <p>Desarollando lógica local para ${tabId}...</p>
    </div>
  `
}

// Start
document.addEventListener('DOMContentLoaded', initApp)
