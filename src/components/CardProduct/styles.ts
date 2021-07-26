import styled from 'styled-components'
import {Link}  from 'react-router-dom'

export const Container = styled.div`
  width: 16rem;
  height: 24rem;

  text-align: center;

  border-radius: 5px;

  transition: all .3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px 2px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 60%;

  margin-bottom: 0.875rem;

  border-radius: 5px;

  background-color: #fff;

  object-fit: contain;
`

export const LinkProduct = styled(Link)`
  text-decoration: none;
`

export const Title = styled.p`
  font-size: 0.875rem;
  color: #252525;
`

export const Price = styled.p`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: blue;
`