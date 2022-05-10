import axios from "axios";

export const logout = async () => {

    try{
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/logout`);
    } catch (error) {
        console.log(error);
      }
};
