import axios from "axios";

export const persistence = async () => {

    let user;

    console.log(localStorage.getItem("user"))

    try{
        if(localStorage.getItem("user")){
            user = localStorage.getItem("user")
        }else{
            user = null
        }
        return user
    }catch(error){
        console.log(error)
    }
};
