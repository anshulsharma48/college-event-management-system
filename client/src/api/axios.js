import axios from "axios"

const api = axios.create({
  baseURL: "https://college-event-backend-ab78.onrender.com/api"
})

export default api