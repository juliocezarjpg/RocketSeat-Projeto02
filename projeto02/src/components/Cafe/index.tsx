import { CafeContainer } from './styles'

import expressoTradicional from '../../assets/cafes/expresso-tradicional.png'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Cafe() {
  return (
    <CafeContainer>
      <div className="productDetails">
        <img src={expressoTradicional} alt="Café expresso tradicional"></img>
        <section className="tags">
          <p>Tradicional</p>
        </section>
        <h2>Expresso Tradicional</h2>
        <h3>O tradicional café feito com água quente e grãos moídos</h3>
        <section className="productToCart">
          <p className="price">
            R$ <span>9,90</span>
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
