import axios from "axios";

export const persistence = async () => {

    try{
        const user = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/me`)

        return user.data
    }catch(error){
        console.log(error)
    }
};
