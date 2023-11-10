import { NavLink } from 'react-router-dom'
import { ItemCartDetails } from '../ItemCartDetails'
import { CartDetailsContainer } from './styles'

export function CartDetails() {
  return (
    <CartDetailsContainer>
      <div>
        <div>
          <ItemCartDetails />
          <ItemCartDetails />
        </div>
        <div>
          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <p>Total</p>
            <p>R$ 32,20</p>
          </div>
        </div>
        <NavLink to="/orderplaced">
          <button>Confirmar Pedido</button>
        </NavLink>
      </div>
    </CartDetailsContainer>
  )
}
