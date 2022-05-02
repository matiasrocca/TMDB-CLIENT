import axios from "axios";

export const favoritosUsuario = async (id) => {

    try{
        const results = await axios.get(`/api/users/${id}/favoritos`)
        return results.data
    } catch (error) {
        console.log(error);
      }
};


export const añadirAFavoritos = async (userId, movieId, title, poster_path, type) => {

    try{
        const results = await axios.post(`/api/users/${userId}/add`, {
            id : movieId,
            title: title,
            poster_path: poster_path,
            type: type})

        return results
    } catch (error) {
        console.log(error);
      }
};

export const eliminarDeFavoritos = async (userId, movieId) => {

    try{
        const results = await axios.delete(`/api/users/${userId}/${movieId}/delete`)
        return results
    } catch (error) {
        console.log(error);
      }
};

export const esFavorita = async (usuario, peliculaId) => {
    let usuarioId;
    if(usuario) usuarioId = usuario.id

    try{
        const results = await axios.get(`/api/users/${usuarioId}/favoritos/${peliculaId}`)
        return results.data.success
    } catch (error) {
        return false
      }
};