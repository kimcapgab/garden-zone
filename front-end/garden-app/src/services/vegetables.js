import api from './apiConfig'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

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
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    }
    const response = await api.post(`/vegetables/`, veg, headers)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateVegetable = async (id, veg) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    }
    const response = await api.put(`/vegetables/${id}/`, veg, headers)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteVegetable = async (id) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    }
    const response = await api.delete(`/vegetables/${id}/`, headers)
    return response.data
  } catch (error) {
    throw error
  }
}