import styled, { css } from "styled-components";
import { Link } from "wouter";

const headerLinkCommon = css`
    appearance:none;
    background:none;
    border:none;
    color:white;
    outline:none;
    font-size:.9rem;
    margin-right:3px;
    padding:.2rem .3rem;
    cursor:pointer;
`;

const HeaderLinkStyled = styled(Link)`
    ${headerLinkCommon}
    
`
const HeaderButtonStyled = styled.button`
    ${headerLinkCommon}

`

const HeaderLink = ({ to, children , onClick }) => {
    if (to) return <HeaderLinkStyled to={to}>{children}</HeaderLinkStyled>
    return <HeaderButtonStyled onClick={onClick}>{children}</HeaderButtonStyled>
}


export default HeaderLink