import React from 'react'
import styled from "styled-components";

const BtnFavContainer = styled.div`
    position: absolute;
    right:5px;
    top:5px;
    border-radius: 50%;
    height:40px;
    width: 40px;
    text-align:center;
    line-height:40px;
    border:none;
    background-image:radial-gradient(rgba(166,46,0,0.7917366775811887) 23%, rgba(221,221,221,.5) 100%);
    background-image: ${({ isFav }) => `radial-gradient(rgba(166,46,0,0.7917366775811887) ${isFav ? "23":"5"}%, rgba(221,221,221,.5) 100%)`};;
    cursor:pointer;
`;
const BtnIcon = styled.button`
    display: block;
    right:0;
    position: absolute;
    top:0;
    border-radius: 50%;
    height:40px;
    width: 40px;
    border:none;
    opacity: ${(props) => props.isFav ? 1 : 0.4};
`;


export default function Favs({ isFav ,onClick}) {
    return (
        <BtnFavContainer isFav={isFav} >
            <BtnIcon isFav={isFav} onClick={onClick}>
                ❤️
            </BtnIcon>
        </BtnFavContainer>
    )
}
