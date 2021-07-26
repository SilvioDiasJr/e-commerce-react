import { useEffect } from "react"
import { useState } from "react"

import { api } from "../../api/api"

import { CardProduct } from "../../components/CardProduct"
import { formatPrice } from "../../util/format"

import { Container, Wrapper, Content, Title } from "./styles"

interface ProductsProps {
  id: number,
  name: string,
  image: string,
  price: number
}

export const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductsProps[]>([])
  
  useEffect(() => {
     async function handleProducts(){
       await api.get('/products')
       .then((response) => setProducts(response.data))
       .catch((error) => console.error(error))
     }
     handleProducts()
  },[])
  
  return (
    <Container>
      <Wrapper>
        <Title>Produtos</Title>
        <Content>
          { products.map((product) => (
            <CardProduct
              id={product.id}
              name={product.name}
              price={formatPrice(product.price)}
              image={product.image}
            />
          ))}
        </Content>
      </Wrapper>
    </Container>
  )
}