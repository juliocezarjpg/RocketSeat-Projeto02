import { ItemCartDetailsContainer } from './styles'

import expressoTradicional from '../../assets/cafes/expresso-tradicional.png'
import { Minus, Plus, Trash } from 'phosphor-react'

export function ItemCartDetails() {
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
                  <Minus size="14" />
                </button>
                <p className="quantity">1</p>
                <button className="signals">
                  <Plus size="14" />
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
