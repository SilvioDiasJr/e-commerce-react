import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 5rem);

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 80%;

  display: flex;

  margin: 1rem 0;

  gap: 1rem;
`

export const ContentImage = styled.div`
  flex: 1;
  height: 31.25rem;

  margin: 1rem 0;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;

  background-color: #fff;
`

export const Product = styled.div`
  flex: 1;
  height: 31.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1rem 0;

  background-color: #fff;
`

export const ContentPurchase = styled.div`
  width: 90%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;
`

export const Title = styled.h1`
  font-size: 1.2rem;
  color: #adadad;
`

export const Price = styled.p`
  margin: 2rem;

  font-size: 2rem;
  font-weight: 700;
  color: #595959;
  `

export const Button = styled.button`
  width: 70%;
  height: 3rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  
  border: 0;
  border-radius: 5px;
  
  background-color: #d90e00;
  
  cursor: pointer;
  
  transition: all .3s ;
  
  &:hover {
    filter: brightness(.9);
  }
  `

export const IconCart = styled(FiShoppingCart)`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  
  margin-right: 1rem;
`

export const ContentShipping = styled.div`
  width: 100%;
  height: 2.5rem;

  display: flex;
  justify-content: center;
`

export const InputShipping = styled(InputMask)`
  width: 50%;
  height: 100%;

  border: 0;
  border-radius: 5px 0 0 5px;

  outline: none;

  font-size: 1.2rem;
  text-align: center;
  color: #787878;

  background-color: #f2f6fa;

  &::placeholder {
    color: #b3b3b3;
    font-size: 1rem;
  }
`

export const ButtonSearch = styled.button`
  height: 100%;

  border: 0;
`

export const IconSearch = styled(FiSearch)`
  height: 100%;

  padding: 0 0.875rem;

  border-radius: 0 5px 5px 0;

  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;

  background-color: #adadad;

  cursor: pointer;
`

export const ProductDescription = styled.div`
  padding: 2rem;

  margin-bottom: 2rem;

  background-color: #fff;
`

export const Description = styled.p`
    font-size: 1rem;
    color: #8c8c8c;
  `