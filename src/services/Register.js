import axios from "axios";

export const register = async (datos) => {

    try{
        const respuesta = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, datos)
        return respuesta.data
    } catch (error) {
        console.log(error)
      }
};