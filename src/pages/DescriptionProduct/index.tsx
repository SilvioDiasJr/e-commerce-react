import { InputHTMLAttributes, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { api } from "../../api/api"
import { apiZipCode } from "../../api/apiZipCode"
import { formatPrice } from "../../util/format"

import {
  Button,
  ButtonSearch,
  Container,
  ContentPurchase,
  ContentImage,
  Description,
  ProductDescription,
  IconCart,
  Image,
  Price,
  Title,
  Wrapper,
  Product,
  ContentShipping,
  InputShipping,
  IconSearch
} from "./styles"

interface ProductsProps {
  name: string,
  description: string,
  image: string,
  price: number
  priceFormatted: number
}

type InputType = InputHTMLAttributes<HTMLInputElement>

export const DescriptionProduct: React.FC = ({...rest}: InputType) => {
  const [product, setProduct] = useState<Partial<ProductsProps>>({})
  const [zipCode, setZipCode] = useState<string>()
  const [shipping, setShipping] = useState<Partial<ProductsProps>>({})
  const [isLoading, setLoading] = useState(false)

  let { id } = useParams() as any

  useEffect(() => {
    async function handleProduct() {
      await api.get(`/products/${id}`)
        .then((response) => {
          const { data } = response
          setProduct({
            ...data,
            priceFormatted: formatPrice(data.price)
          })
        })
        .catch((error) => console.error(error))
    }
    handleProduct()
  }, [id])

  async function handleZipCode() {
    setLoading(true)

    await apiZipCode.get(`/${zipCode}/json`)
      .then((response) => {
        let { data } = response
        setShipping({
          ...data,
          deadline: 7
        })
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
    
    setZipCode('')
  }

  return (
    <Container>
      <Wrapper>
        <ContentImage>
          <Image
            src={product.image}
          />
        </ContentImage>

        <Product>
          <ContentPurchase>
            <Title>{product.name}</Title>
            <Price>{product.priceFormatted}</Price>
            <Button>
              <IconCart />
              Comprar
            </Button>
          </ContentPurchase>

          <ContentShipping>
            <InputShipping
              {...rest}
              placeholder="CEP"
              mask="99999-999"
              value={zipCode}
              type="text"
              onChange={(e) => setZipCode(e.target.value)}
            />
            <ButtonSearch
              onClick={() => handleZipCode()}
            >
              <IconSearch />
            </ButtonSearch>
          </ContentShipping>
        </Product>
      </Wrapper>

      <Wrapper>
        <ProductDescription>
          <Description>{product.description}</Description>
        </ProductDescription>
      </Wrapper>

    </Container>
  )
}