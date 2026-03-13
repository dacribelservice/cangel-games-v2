/**
 * Cangel V2 - Formateadores y Cálculos Matemáticos Puros
 */

export const formatCOP = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(amount)
}

export const formatUSD = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export const calculateProfit = (sale, cost) => {
  return sale - cost
}
