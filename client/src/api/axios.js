import axios from 'axios'


export default axios.create({
    baseURL: Process.env.REACT_APP_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials:true
})