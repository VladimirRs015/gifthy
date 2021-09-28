import React from "react";
import styled from "styled-components";

const BtnIcon = styled.button`
  display: block;
  display:flex;
  justify-content:center;
  align-items:center;
  right: 0;
  position: absolute;
  top: 0;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  background:white;
  border:none;
`;

export default function Favs({ onClick, children }) {
  return <BtnIcon onClick={onClick}>{children}</BtnIcon>;
}
