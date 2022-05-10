import axios from "axios";

export const allUsers = async () => {
    console.log(process.env.REACT_APP_SERVER_URL)

    try{
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/all`);

        return res.data
    } catch (error) {
        console.log(error);
      }
};


export const usersQuery = async (query) => {

    try{
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/all/${query}`);

        return res.data
    } catch (error) {
        console.log(error);
      }
};

export const userSpecific = async (id) => {

    try{
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/:${id}`);

        return res.data;
    } catch (error) {
        console.log(error)
    }

}
