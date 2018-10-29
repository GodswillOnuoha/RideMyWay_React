import jwtDecode from 'jwt-decode'

const isLoggedIn = () => {

    if (!localStorage.token) {
        return false;
    }

    const token = localStorage.token

    let decoded;

    try {
        decoded = jwtDecode(token)
        const { exp } = decoded
        const currentDate = new Date()

        // check if token is still valid
        return ((exp * 1000) - currentDate.getTime()) > 1
    } catch (error) {
        return false;
    }
}

export default isLoggedIn
