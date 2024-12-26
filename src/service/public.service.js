import axios from "axios"

const API_URL = 'http://localhost:3000'

export const loginRequest = async (user) => {

    try {
        const response = await axios.post(`${API_URL}/auth/login`, user)

        return response.data
    } catch (error) {

        if (error.status === 404) {
            throw new Error('Usuario no encontrado')
        }
        console.error(error.message)
    }
}