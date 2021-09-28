import styled from "styled-components"

const Image = styled.img`
  width:100%;
  object-fit: cover;
  height:100%;
`
const CardMedia = styled.div`
  height:100%;

`
const Card = styled.article`
    position: relative;
    outline:1px solid red;
`
export {
  Image,
  Card,
  CardMedia
}
