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

export const createZone = async (zone) => {
  try {
    const response = await api.post(`/zones/`, zone)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateZone = async (id, zone) => {
  try {
    const response = await api.put(`/zones/${id}/`, zone)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteZone = async (id) => {
  try {
    const response = await api.delete(`/zones/${id}/`)
    return response.data
  } catch (error) {
    throw error
  }
}