import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

export const Top = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 1em auto;
    width: 25em;
`;

export const ControlButton = styled.button`
    @import url('https://fonts.googleapis.com/css?family=Orbitron|Roboto&display=swap');
    font-family: 'Orbitron', sans-serif;
    color: yellow;
    background: black;
    border: 1px solid yellow;
    border-radius: 2em;
    font-size: 1.5rem
    padding: .2em;
    width: 7em;
    height: 2em;
    cursor: pointer;
    &:hover {
        color: black;
        background: yellow;
        border: 1px solid black;
    }
`;

export default function StarWarsCharacters() {
    const [characters, setCharacters] = useState([]);
    const [request, setRequest] = useState("https://swapi.co/api/people/");
    const [nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");

    useEffect(() => {
        axios
        .get(request)
        .then(response => {
            setCharacters(response.data.results);
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
            console.log(response);
            console.log(response.data.next);
        })
    }, [request]);
    


    return (
    <div>
        <Top>
            <ControlButton onClick={() => setRequest(previousPage)}>Previous</ControlButton>
            <ControlButton onClick={() => setRequest(nextPage)}>Next</ControlButton>
        </Top>
        <Grid>
        {characters.map(item => {
            return <StarWarsCard name={item.name} gender={item.gender} height={item.height} hair_color={item.hair_color}/>
        })}
        </Grid>
    </div>
    
    )
}