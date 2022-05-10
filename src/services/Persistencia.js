import axios from "axios";

export const persistence = async () => {

    try{
        const user = await axios.get(`https://de-pelicula-server.herokuapp.com/api/users/me`)

        return user.data
    }catch(error){
        console.log(error)
    }
};
