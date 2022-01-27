import api from './apiConfig'

export const getZones = async () => {
  try {
    const response = await api.get('/zones/')
    return response.data
  } catch (error) {
    throw error
  }
}