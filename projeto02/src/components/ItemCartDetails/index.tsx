import { ItemCartDetailsContainer } from './styles'

import expressoTradicional from '../../assets/cafes/Type=Americano.png'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'

export function ItemCartDetails() {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
  }

  return (
    <ItemCartDetailsContainer>
      <div className="boxItem">
        <div className="detailsItem">
          <div>
            <img
              src={expressoTradicional}
              alt="Café expresso tradicional"
            ></img>
          </div>
          <div>
            <div>
              <p className="TituloItemCartDetails">Expresso Tradicional</p>
            </div>
            <div className="quantityControl">
              <div className="productQuantity">
                <button className="signals">
                  <Minus size="14" onClick={handleDecrement} />
                </button>
                <p className="quantity">{quantity}</p>
                <button className="signals">
                  <Plus size="14" onClick={handleIncrement} />
                </button>
              </div>
              <div className="itemRemove">
                <button className="remove">
                  <Trash size="14" />
                </button>
                <p>Remover</p>
              </div>
            </div>
          </div>
        </div>
        <div className="priceItemCartDetails">R$ 9,90</div>
      </div>

      <div className="stroke"></div>
    </ItemCartDetailsContainer>
  )
}
