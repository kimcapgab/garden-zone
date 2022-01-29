import api from './apiConfig'

export const getVegetables = async () => {
  try {
      const response = await api.get('/vegetables/')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getVegetable = async (id) => {
  try {
    const response = await api.get(`/vegetables/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createVegetable = async (veg) => {
  try {
    const response = await api.post(`/vegetables/`, veg)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateVegetable = async (id, veg) => {
  try {
    const response = await api.put(`/vegetables/${id}/`, veg)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteVegetable = async (id) => {
  try {
    const response = await api.delete(`/vegetables/${id}/`)
    return response.data
  } catch (error) {
    throw error
  }
}