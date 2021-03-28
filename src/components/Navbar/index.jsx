import { useContext } from "react";
import { ctx as authContext } from "contexts/authContext";
import LinkStyled from "components/styled/HeaderLinksStyled";
import styled from "styled-components";
// import SearchForm from "components/SearchForm/SearchForm"
const NavStyled = styled.nav`
  display:flex; 
  justify-content:flex-end;
  padding:1rem 0 ;
`;

export default function Navbar() {
  const { isLogged, doLogout } = useContext(authContext);

  return (
    <NavStyled>
      {/* <SearchForm />  */}
      {
        !isLogged ?
          (
            <>
              <LinkStyled to="/login">Login</LinkStyled>
              <LinkStyled to="/register">Register</LinkStyled>
            </>
          ) : (
            <LinkStyled onClick={doLogout} >
              Logout
            </LinkStyled>
          )
      }
    </ NavStyled>
  )
}
