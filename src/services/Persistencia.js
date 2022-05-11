import axios from "axios";

export const persistence = async () => {

    try{
        const user = JSON.parse(localStorage.getItem("user"))
        return user
    }catch(error){
        console.log(error)
    }
};
