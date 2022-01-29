import axios from "axios";

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}


const apiUrls = axios.create({
  baseURL: process.env.NODE_ENV === 'PRODUCTION'
  ? `https://garden-zone-db.herokuapp.com/`
  : `http://localhost:8000/`
})

// if (window.location.hostname === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// }

// const api = axios.create({
//   baseURL: apiUrl
// })


apiUrls.interceptors.request.use(async function (config) {
  config.headers['Authorization'] = await getToken()
  return config
}, function (error) {
  console.log('Request error: ', error)
  return Promise.reject(error)
});

export default apiUrls