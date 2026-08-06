import api from './api'

export const submitQuoteRequest = (payload) => api.post('/quotes', payload)
