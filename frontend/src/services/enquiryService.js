import api from './api'

export const submitEnquiry = (payload) => api.post('/enquiries', payload)
