import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const NameCard = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Orbitron|Roboto&display=swap');
    transition: transform 0.2s ease-in;
    background: black;
    color: black;
    width: 30em;
    max-height: 50em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;

    &:hover {
        transform: translateY(-5px) scale(1.05);
    }
`;

const Title = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Orbitron|Roboto&display=swap');

    font-family: 'Orbitron', sans-serif;
    color: yellow;
`;

const Content = styled.p`
    @import url('https://fonts.googleapis.com/css?family=Orbitron|Roboto&display=swap');
    font-family: 'Orbitron', sans-serif;
    color: yellow;
`;






const StarWarsCard = props => {
    return (
        <NameCard>
            <Title>Name: {props.name}</Title>
            <Content>Gender: {props.gender}</Content>
            <Content>Height: {props.height}</Content>
            <Content>Hair Color: {props.hair_color}</Content>
        </NameCard>
    )
}

export default StarWarsCard;