import React, { useState } from 'react';
import { useLocation } from "wouter";
import styled from "styled-components";

const SearchFormStyled = styled.form`
  display: flex;
  max-width: 500px;
  margin:0 auto;
  & > *{
      border:none;
      font-size: 1rem;
      box-sizing: border-box
  }
`
const InputSearchStyled = styled.input`
  padding-left:1rem;
  flex-grow:1;
  flex-shrink: 1;
  width: 60%;
  &:focus{
    outline: none;
  }
`
const ButtonFormStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.main}; 
  color:${({ theme }) => theme.dark};
  color:#eee;
  padding:.7rem 1rem;
 
`


function SearchForm() {

  const [keyword, setKeyword] = useState('');
  const [, setLocation] = useLocation();

  function handleFormSubmit(e) {
    e.preventDefault()
    setLocation(`/gifs/${keyword}`);
  }

  function handleInputChange(e) {
    setKeyword(e.target.value)
  }

  return (
    <SearchFormStyled onSubmit={handleFormSubmit}>
      <InputSearchStyled type="search"
        value={keyword}
        onChange={handleInputChange} />
      <ButtonFormStyled type="submit">
        Search
      </ButtonFormStyled>
    </SearchFormStyled>
  )
}

export default SearchForm