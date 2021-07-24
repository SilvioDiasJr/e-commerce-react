import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react'
import {
  Button,
  Container,
  ContentWrapper,
  IconSearch,
  IconUser,
  Search,
  SearchWrapper,
  Wrapper
} from './styles'

type InputType = InputHTMLAttributes<HTMLInputElement>

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const Header: React.FC = (
  { ...rest }: InputType,
  { ...restButton }: ButtonType) => {
  return (
    <Container>
      <Wrapper>
        <h1>Logo</h1>

        <ContentWrapper>
          <SearchWrapper>
            <Search
              {...rest}
              type="search"
              placeholder="Pesquisar produtos"
            />

            <Button
              {...restButton}
            >
              <IconSearch />
            </Button>
          </SearchWrapper>

          <IconUser />
        </ContentWrapper>
        
      </Wrapper>
    </Container>
  )
}