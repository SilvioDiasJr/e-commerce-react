import { ImgHTMLAttributes } from "react"

import {
  Container,
  Image,
  LinkProduct,
  Price,
  Title
} from "./styles"

type ImageType = ImgHTMLAttributes<HTMLImageElement>

interface ProductsProps {
  id: number,
  name: string,
  image: string,
  price: string
}

export const CardProduct: React.FC<ProductsProps> = (
  { id, name, image, price }, 
  {...rest}: ImageType) => {
  return (
    <LinkProduct
      to={`/produto/descricao/` + id}
    >
      <Container>
        <Image
          {...rest}
          src={image}
        />

        <Title>
          {name}
        </Title>

        <Price>{price}</Price>
      </Container>
    </LinkProduct>
  )
}