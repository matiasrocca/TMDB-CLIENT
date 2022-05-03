import axios from "axios";

export const trendingFunc = async (queBuscamos) => {

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/${queBuscamos}/week?api_key=${process.env.REACT_APP_KEY}`);

        return res.data.results
    } catch (error) {
        console.log(error);
      }
};

export const topRatedFunc = async (queBuscamos) => {

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/${queBuscamos}/top_rated?api_key=${process.env.REACT_APP_KEY}&page=1`)

        return res.data.results
    } catch (error) {
        console.log(error);
      }
};

export const upComingFunc = async (queBuscamos) => {

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/${queBuscamos}/upcoming?api_key=${process.env.REACT_APP_KEY}`)
        
        return res.data.results
    } catch (error) {
        console.log(error);
      }
};

export const specificApi = async (type, id) => {

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_KEY}&language=en-US&external_source=imdb_id`)
        return res.data
    } catch (error) {
        console.log(error);
      }
};

export const contentQuery = async (query) => {

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_KEY}&query=${query}`)
        
        return res.data.results
    } catch (error) {
        console.log(error);
      }
};

export const recomendadasFunc = async (id) => {

    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`);

        return ({
            hayRecomendadas: true,
            recomendadas: res.data.results
        })
    } catch (error) {
        return ({
            hayRecomendadas: false
        });
      }
};