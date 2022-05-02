import { useContext, useEffect, useState } from "react";
import { trendingFunc, topRatedFunc, upComingFunc } from "../services/PedidosApi";
import { TypeContext, UserContext } from "../index";
import ImageList from "./ImageList";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';


import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from "react-router-dom";


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 50,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(17px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(30px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: "black",
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 16,
      height: 16,
      borderRadius: 15,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 24 / 2,
      opacity: 1,
      backgroundColor:"black",
      boxSizing: 'border-box',
    },
  }));

const Main = (props) => {
    const {user} = useContext(UserContext)
    const {type, setType} = useContext(TypeContext)
    const [isLoading, setLoading] = useState(true);
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
  
    useEffect(() => {
        Promise.all([
            trendingFunc(type),
            topRatedFunc(type),
            upComingFunc(type),
        ]).then(results => {
            setTrending(results[0])
            setTopRated(results[1])
            setUpcoming(results[2])
        }).then(() => setLoading(false))
        
    }, [type]);
  
    const handleThemeChange = (e) => {
        setLoading(true)
        if(e.target.checked) setType("tv")
        if(!e.target.checked) setType("movie")
    };
    
    return(
    <>
        {isLoading ?
            (
                <div className="main2">
                    <section className="section is-large" style={{"display":"flex", "justifyContent":"center"}}>
                        <h1 className= "texto">
                            De Pelicula
                        </h1>
                    </section>
                </div>
            ) : 
            (
                <div className="main">
                    {user?(
                        <>
                        <section className="section is-large" style={{"padding": "14rem 3rem 3rem 3rem"}}>
                            <div className="primerSeccion">
                                <h1 className= "texto">
                                    De Pelicula
                                </h1>
                                <h2 className="textoEncabezado">
                                Que gusto tenerte de vuelta! Ya sabés como funcionanuestra pagina, elegís la categoría y encontrás las series o películas que más te gusten, podés agregalas a favoritos. Conocé la lista de favoritos de otros usuarios.
                                </h2>
                                <br/>
                                <Link to={"perfil"}>
                                    <button className="button is-white" >PERFIL</button>
                                </Link>
                            </div>
                        </section>
                        </>
                    ):(
                        <>
                        <section className="section is-large" style={{"padding": "14rem 3rem 3rem 3rem"}}>
                            <div className="primerSeccion">
                                <h1 className= "texto">
                                    De Pelicula
                                </h1>
                                <h2 className="textoEncabezado">
                                Registrate! Elegí la categoría y encontrá las series o películas que más te gusten, podés agregarlas a favoritos. Conocé la lista de favoritos de otros usuarios.
                                </h2>
                                <br/>
                                <button className="button is-white" onClick={()=> props.setTrigger(2)} >REGISTER</button>
                            </div>
                        </section>
                        </>
                    )}
                    
                    <section className="section is-small" style={{"padding": "1rem 1rem 1rem 1rem"}}>
                        <div className="componenteSwitcher">
                            <div style={{"padding": "0.5rem 0.5rem 0.5rem 0.5rem", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <MovieIcon style={{"color":"white", "fontSize":"40"}}></MovieIcon>
                                    {type === "tv"?(
                                        <AntSwitch defaultChecked={true} onChange={handleThemeChange} inputProps={{ 'aria-label': 'ant design' }} />
                                    ):(
                                        <AntSwitch defaultChecked={false} onChange={handleThemeChange} inputProps={{ 'aria-label': 'ant design' }} />
                                    )}
                                    <LiveTvIcon style={{"color":"white", "fontSize":"40"}}></LiveTvIcon>
                                </Stack>
                            </div>
                        </div>
                    </section>
                    <section className="section is-large contenedorSlider" style={{"padding": "3rem 3rem 3rem 3rem"}}>
                        <div className="componentesInicio" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                            <h2 className="titulos subtitulo">WEEKLY TRENDING</h2>
                            <br/>
                            <br/>
                            <ImageList categoria = {trending} queBuscamos={type}/>
                        </div>
                    </section>
                    <section className="section is-large contenedorSlider" style={{"padding": "3rem 3rem 3rem 3rem"}}>
                        <div className="componentesInicio" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                            <h2 className="titulos subtitulo">TOP RATED</h2>
                            <br/>
                            <br/>
                            <ImageList categoria = {topRated} queBuscamos={type}/>
                        </div>
                    </section>
                    {type === "movie" && (
                        <section className="section is-large contenedorSlider" style={{"padding": "3rem 3rem 3rem 3rem"}}>
                            <div className="componentesInicio" style={{"padding":"5% 5% 5% 5%", "backgroundColor":"rgba(0, 0, 0, 0.508)", "borderRadius":"5px"}}>
                                <h2 className="titulos subtitulo">UPCOMING</h2>
                                <br/>
                                <br/>
                                <ImageList categoria = {upcoming} queBuscamos={type}/>
                            </div>
                        </section>
                    )}
                </div>
            )}

    
    </>
    )
}

export default Main