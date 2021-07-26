import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: calc(100vh - 5rem);

  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 1rem 0;
`

export const Title = styled.h1`
  width: 100%;
  font-size: 1.125rem;
  text-align: start;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  gap: 1rem;

  margin: 1rem 0;
`