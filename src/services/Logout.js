import axios from "axios";

export const logout = async () => {

    try{
        await axios.post("/api/users/logout");
    } catch (error) {
        console.log(error);
      }
};
