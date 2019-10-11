import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import styled from "styled-components";

const Grid = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export default function StarWarsCharacters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
        .then(response => {
            setCharacters(response.data.results);
            
        })
    }, []);
    console.log(characters);


    return (
        <Grid>
            {characters.map(item => {
                return <StarWarsCard name={item.name} gender={item.gender} height={item.height} hair_color={item.hair_color}/>
            })}
        </Grid>
    )
}