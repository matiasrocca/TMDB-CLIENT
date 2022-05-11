import axios from "axios";

export const persistence = async () => {

    try{
        const user = {
            id: localStorage.getItem("id"),
            username: localStorage.getItem("user")
        }

        return user
    }catch(error){
        console.log(error)
    }
};
