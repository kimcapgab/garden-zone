import api from './apiConfig'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

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
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    }
    const response = await api.post(`/zones/`, zone, headers)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateZone = async (id, zone) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    }
    const response = await api.put(`/zones/${id}/`, zone, headers)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteZone = async (id) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    }
    const response = await api.delete(`/zones/${id}/`, headers)
    return response.data
  } catch (error) {
    throw error
  }
}