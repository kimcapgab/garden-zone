import axios from "axios";




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

export default apiUrls