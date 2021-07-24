import styled from 'styled-components'
import { FiSearch, FiUser } from 'react-icons/fi'

export const Container = styled.header`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #d90e00;
`

export const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentWrapper = styled.div`
  width: 20rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SearchWrapper = styled.div`
  width: 17rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: #f7f7f7;

  border-radius: 5px;
`

export const Search = styled.input`
  flex: 1;

  outline: none;
  border:  0;
  border-radius: 5px;
  padding: 0 8px;

  font-size: 1rem;

  background-color: inherit;

  &::placeholder {
    color: #a3a3a3;
  }
`

export const Button = styled.button`
  width: 2.813rem;
  height: 100%;

  border:  0;
  border-radius: 5px;

  background-color: inherit;

  cursor: pointer;

  transition: all 0.3s;

  &:hover{
    background-color: #f0f0f0;
  }
`

export const IconSearch = styled(FiSearch)` 
  color: #000;
  font-size: 1.2rem;
`

export const IconUser = styled(FiUser)` 
  color: #f7f7f7;
  font-size: 1.8rem;
`

