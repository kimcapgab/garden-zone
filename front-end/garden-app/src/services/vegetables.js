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