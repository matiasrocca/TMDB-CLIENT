import axios from "axios";

export const login = async (email, contraseña) => {

    try{
        const results = await axios.post(`${process.env.REACT_APP_SERVER_URL}api/users/login`, {
            email: email,
            contraseña: contraseña
        })
        
        return ({
            success:true,
            user: results.data
        })
    } catch (error) {
        return ({
            success: false,
            message: "Username or password incorrect."
        });
      }
};
