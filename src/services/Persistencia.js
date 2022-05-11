import axios from "axios";

export const persistence = async () => {

    let user;

    try{
        if(localStorage.getItem("user")){
            user = JSON.parse(localStorage.getItem("user"))
        }else{
            user = null
        }
        return user
    }catch(error){
        console.log(error)
    }
};
