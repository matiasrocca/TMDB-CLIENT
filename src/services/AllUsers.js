import axios from "axios";

export const allUsers = async () => {

    try{
        const res = await axios.get("/api/users/all");

        return res.data
    } catch (error) {
        console.log(error);
      }
};


export const usersQuery = async (query) => {

    try{
        const res = await axios.get(`/api/users/all/${query}`);

        return res.data
    } catch (error) {
        console.log(error);
      }
};
