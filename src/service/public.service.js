import axios from "axios"

const API_URL = 'https://vhv8fh3g-3000.usw3.devtunnels.ms'

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

const AcusesDemoUrl = 'acuses-de-entrega-de-equipo-demo'

export const getAcuseDemoRequest = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/${AcusesDemoUrl}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

const AcusesDeEntregaUrl = 'acuses-de-entrega-de-equipo'

export const getAcuseDeEntregaRequest = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/${AcusesDeEntregaUrl}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

const ReciboDemo = 'acuse-de-recibido-demo'

export const getReciboDemoRequest = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/${ReciboDemo}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

const ManttoPreventivo = 'calendario-de-mantenimiento-preventivo'

export const getManttoPreventivoRequest = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/${ManttoPreventivo}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

const SolicitudPrestamo = 'solicitud-de-prestamo-de-equipo-medico'

export const getSolicitudPrestamoRequest = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/${SolicitudPrestamo}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}

const OrdenServicio = 'orden-de-servicio'

export const getOrdenServicioRequest = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/${OrdenServicio}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error.message);
    }
}