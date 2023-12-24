import { CafeContainer } from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface CafeProps {
  imagem: string
  tipo: string
  nome: string
  descrição: string
  preço: string
}

export function Cafe(props: CafeProps) {
  return (
    <CafeContainer>
      <div className="productDetails">
        <img src={props.imagem} alt={props.nome}></img>
        <section className="tags">
          <p>{props.tipo}</p>
        </section>
        <h2>{props.nome}</h2>
        <h3>{props.descrição}</h3>
        <section className="productToCart">
          <p className="price">
            R$ <span>{props.preço}</span>
          </p>
          <section className="actions">
            <section className="productQuantity">
              <button className="signals">
                <Minus size="14" />
              </button>
              <p className="quantity">1</p>
              <button className="signals">
                <Plus size="14" />
              </button>
            </section>
            <section>
              <button className="addToCart">
                <ShoppingCart weight="fill" size="22" />
              </button>
            </section>
          </section>
        </section>
      </div>
    </CafeContainer>
  )
}
