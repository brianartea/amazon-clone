import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-clone-54968.cloudfunctions.net/api'

  //'http://localhost:5001/clone-54968/us-central1/api' for testing locally
})

export default instance;