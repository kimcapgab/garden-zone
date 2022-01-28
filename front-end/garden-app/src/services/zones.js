import api from './apiConfig'

export const getZones = async () => {
  try {
    const response = await api.get('/zones/')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getZone = async (id) => {
  try {
    const response = await api.get(`/zones/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}